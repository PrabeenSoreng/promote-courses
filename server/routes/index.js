const express = require("express");
const app = express();
const session = require("express-session");
const db = require("../db");

const bodyParser = require("body-parser");
const keys = require("../keys");
const passport = require("passport");

const usersRoutes = require("./user.js");
const productRoutes = require("./product.js");
const categoryRoutes = require("./category.js");
const blogRoutes = require("./blog.js");
const apiRoutes = require("./api.js");
const productHeroRoutes = require("./product-hero.js");

require("../services/passport.js");

// connect to DB
db.connect();
const store = db.initSessionStore();

app.use(bodyParser.json());

const sess = {
  name: "promo-secure-session",
  secret: keys.SESSION_SECRET,
  cookie: { maxAge: 2 * 60 * 60 * 1000 },
  resave: false,
  saveUninitialized: false,
  store
};

if (process.env.NODE_ENV === "production") {
  app.set("trust proxy", 1);
  sess.cookie.secure = true;
  sess.cookie.httpOnly = true;
  sess.cookie.sameSite = true;
  sess.cookie.domain = process.env.DOMAIN; // .yourdomain.com
}

app.use(session(sess));
app.use(passport.initialize());
app.use(passport.session());

app.use("", apiRoutes);
app.use("/product-heroes", productHeroRoutes);
app.use("/users", usersRoutes);
app.use("/products", productRoutes);
app.use("/categories", categoryRoutes);
app.use("/blogs", blogRoutes);

module.exports = {
  path: "/api/v1",
  handler: app
};
