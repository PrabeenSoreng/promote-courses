const Category = require("../models/category.js");

exports.getCategories = function(req, res, next) {
  Category.find({}).exec((errors, categories) => {
    if (errors) return res.status(422).send(errors);
    return res.json(categories);
  });
};
