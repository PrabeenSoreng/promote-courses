const Blog = require("../models/blog.js");
const slugify = require("slugify");
const request = require("request");
const AsycnLock = require("async-lock");
const lock = new AsycnLock();

const MEDIUM_URL = "https://medium.com/@filipjerga/latest?format=json&limit=20";

function parseFilters(queries) {
  const parsedQueries = {};
  if (queries.filter) {
    Object.keys(queries).forEach(qKey => {
      if (qKey.includes("filter")) {
        const pKey = qKey.match(/\[([^)]+)\]/)[1];
        parsedQueries[pKey] = queries[qKey];
      }
    });
  }
  return parsedQueries;
}

exports.getBlogs = function(req, res, next) {
  const pageSize = parseInt(req.query.pageSize) || 0;
  const pageNum = parseInt(req.query.pageNum) || 1;
  const skips = pageSize * (pageNum - 1);
  const filters = req.query.filters || {};

  Blog.find({ status: "published", ...filters })
    .sort({ createdAt: -1 })
    .populate("author -_id -password -products -email -role")
    .skip(skips)
    .limit(pageSize)
    .exec((errors, publishedBlogs) => {
      if (errors) return res.status(422).send(errors);

      Blog.count({}).then(count => {
        return res.json({
          blogs: publishedBlogs,
          count,
          pageCount: Math.ceil(count / pageSize)
        });
      });
    });
};

exports.getMediumBlogs = function(req, res, next) {
  request.get(MEDIUM_URL, (err, apiRes, body) => {
    if (!err && apiRes.statusCode === 200) {
      let i = body.indexOf("{");
      const data = body.substr(i);
      res.send(data);
    } else {
      res.statusCode(500).json(err);
    }
  });
};

exports.getBlogsBySlug = function(req, res, next) {
  const slug = req.params.slug;

  Blog.findOne({ slug })
    .populate("author -_id -password -products -email -role")
    .exec((errors, foundBlog) => {
      if (errors) return res.status(422).send(errors);
      return res.json(foundBlog);
    });
};

exports.getBlogsById = function(req, res, next) {
  const blogId = req.params.id;

  Blog.findById(blogId, function(errors, foundBlog) {
    if (errors) return res.status(422).send(errors);
    return res.json(foundBlog);
  });
};

exports.getUserBlogs = function(req, res, next) {
  const user = req.user;

  Blog.find({ auther: user.id }, function(errors, userBlogs) {
    if (errors) return res.status(422).send(errors);
    return res.json(userBlogs);
  });
};

exports.updateBlog = (req, res, next) => {
  const blogId = req.params.id;
  const blogData = req.body;

  Blog.findById(blogId, function(errors, foundBlog) {
    if (errors) return res.status(422).send(errors);
    if (blogData.status && blogData.status === "published" && !foundBlog.slug) {
      foundBlog.slug = slugify(foundBlog.title, {
        replacement: "-",
        remove: null,
        lower: true
      });
    }
    foundBlog.set(blogData);
    foundBlog.updatedAt = new Date();
    foundBlog.save(function(errors, foundBlog) {
      if (errors) return res.status(422).send(errors);
      return res.json(foundBlog);
    });
  });
};

exports.createBlog = function(req, res, next) {
  const lockId = req.query.lockId;
  if (!lock.isBusy(lockId)) {
    lock.acquire(
      lockId,
      function(done) {
        const blogData = req.body;
        const blog = new Blog(blogData);
        blog.author = req.user;

        blog.save((errors, createdBlog) => {
          setTimeout(() => done(), 5000);
          if (errors) return res.status(422).send(errors);
          return res.json(createdBlog);
        });
      },
      function(errors, ret) {
        errors && console.error(errors);
      }
    );
  } else {
    return res.status(422).send({ message: "Blog is getting saved!" });
  }
};

exports.deleteBlog = function(req, res, next) {
  const blogId = req.params.id;

  Blog.deleteOne({ _id: blogId }, function(errors) {
    if (errors) return res.status(422).send(errors);
    return res.json({ status: "deleted" });
  });
};
