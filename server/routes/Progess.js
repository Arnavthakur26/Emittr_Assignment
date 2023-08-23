// routes/progress.js

const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

const User = require("../models/User");
const Exercise = require("../models/Exercise");

// Get user progress data
router.get("/", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    res.json(user.progress);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Mark an exercise as completed
router.post("/complete", auth, async (req, res) => {
  try {
    // Get exercise details
    const exercise = await Exercise.findById(req.body.exerciseId);

    // Update user's progress
    const user = await User.findById(req.user._id);
    user.progress.completed.push(exercise._id);
    user.progress.lastExercise = exercise._id;
    await user.save();

    res.json(user.progress);
  } catch (err) {
    res.status(404).json({ message: "Exercise not found" });
  }
});

// Update user's skill level
router.post("/levelup", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    // Calculate level based on completed exercises
    const level = calculateLevel(user.progress.completed);

    user.progress.level = level;
    await user.save();

    res.json(user.progress);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
