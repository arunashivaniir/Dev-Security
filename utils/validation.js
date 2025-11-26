const { body } = require("express-validator");

exports.createUserValidator = [
  body("name").isString().notEmpty(),
  body("email").isEmail()
];

exports.updateUserValidator = [
  body("name").optional().isString(),
  body("email").optional().isEmail()
];
