const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { createUserValidator, updateUserValidator } = require("../utils/validation");
const { createUser, getUser, updateUser, deleteUser, getAllUsers } = require("../controllers/users.controller");

// READ ALL users (protected)
router.get("/", auth, getAllUsers);

// CREATE
router.post("/", createUserValidator, createUser);

// READ ONE
router.get("/:id", auth, getUser);

// UPDATE
router.put("/:id", auth, updateUserValidator, updateUser);

// DELETE
router.delete("/:id", auth, deleteUser);

module.exports = router;
