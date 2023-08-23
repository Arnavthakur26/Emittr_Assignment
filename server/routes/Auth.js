// auth.js

const express = require("express");
const router = express.Router();
const User = require("../schemas/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");

// Register a new user
router.post("/register", async (req, res) => {
  // Validate input
  if (!req.body.name || !req.body.email || !req.body.password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // Check if email already exists
  const emailExists = await User.findOne({ email: req.body.email });
  if (emailExists) {
    return res.status(400).json({ message: "Email already exists" });
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  // Create and save user
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
  });
  const JWT_SECRET = "Emittr";
  const data = {
    user: {
      id: user.id,
    },
  };

  try {
    const savedUser = await user.save();
    const jwtData = jwt.sign(data, JWT_SECRET);
    res.status(200).json({ savedUser, token: jwtData });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Login user
router.post("/login", async (req, res) => {
  // Validate input
  if (!req.body.email || !req.body.password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // Check for existing user
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.status(400).json({ message: "Invalid Credentials" });
  }

  // Compare passwords
  const match = await bcrypt.compare(req.body.password, user.password);
  if (!match) {
    return res.status(400).json({ message: "Invalid Credentials" });
  }

  // Generate and return JWT token
  const JWT_SECRET = "Emittr";
  const token = jwt.sign({ _id: user._id }, JWT_SECRET);
  res.json({
    token,
    user: {
      name: user.name,
      email: user.email,
    },
  });
});

//ROUTE 3: Get user from jwt, Login required
router.post("/getUser", auth, async (req, res) => {
  try {
    userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    res.send(user);
  } catch (error) {}
});

module.exports = router;
