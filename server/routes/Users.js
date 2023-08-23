// routes/users.js
const express = require("express");
const router = express.Router();
const User = require("../schemas/User");
const auth = require("../middleware/auth");

// Get logged in user profile
router.get("/profile", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.user.id);
    // console.log(req.user);
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update user profile
router.put("/profile", auth, async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["name", "email", "password", "currentLanguage"];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid updates!" });
  }

  try {
    updates.forEach((update) => (req.user[update] = req.body[update]));
    await req.user.save();
    res.send(req.user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
