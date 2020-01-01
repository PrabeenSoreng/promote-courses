const express = require("express");
const router = express.Router;

const UsersCtrl = require("../controllers/user.js");
const AuthCtrl = require("../controllers/auth.js");

router.get("/me", AuthCtrl.onlyAuthUser, UsersCtrl.getCurrentUser);

router.post("/register", UsersCtrl.register);

router.post("/login", UsersCtrl.login);

router.post("/logout", UsersCtrl.logout);

module.exports = router;
