const { validationResult } = require("express-validator");

let users = [];
let id = 1;

// CREATE
exports.createUser = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const newUser = {
    id: id++,
    name: req.body.name,
    email: req.body.email
  };

  users.push(newUser);
  res.status(201).json(newUser);
};

// READ ALL USERS
exports.getAllUsers = (req, res) => {
  res.json(users);
};


// READ ONE
exports.getUser = (req, res) => {
  const user = users.find(u => u.id == req.params.id);
  if (!user) return res.status(404).json({ msg: "User not found" });
  res.json(user);
};

// UPDATE
exports.updateUser = (req, res) => {
  const user = users.find(u => u.id == req.params.id);
  if (!user) return res.status(404).json({ msg: "User not found" });

  if (req.body.name) user.name = req.body.name;
  if (req.body.email) user.email = req.body.email;

  res.json(user);
};

// DELETE
exports.deleteUser = (req, res) => {
  const index = users.findIndex(u => u.id == req.params.id);
  if (index === -1) return res.status(404).json({ msg: "User not found" });

  users.splice(index, 1);
  res.json({ msg: "User deleted" });
};
