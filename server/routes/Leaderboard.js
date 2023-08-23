// routes/leaderboard.js

const express = require("express");
const router = express.Router();

const Leaderboard = require("../models/Leaderboard");

// Get leaderboard for a language
router.get("/:language", async (req, res) => {
  try {
    const leaderboard = await Leaderboard.findOne({
      language: req.params.language,
    }).populate("users", "name score");

    res.json(leaderboard);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add user score to leaderboard
router.post("/", async (req, res) => {
  try {
    const leaderboard = await Leaderboard.findOne({
      language: req.body.language,
    });

    leaderboard.users.push({
      user: req.body.userId,
      score: req.body.score,
    });

    await leaderboard.save();

    res.json(leaderboard);
  } catch (err) {
    res.status(404).json({ message: "Leaderboard not found" });
  }
});

// Refresh leaderboard
router.get("/refresh/:language", async (req, res) => {
  try {
    // Fetch users and scores for language
    // Sort users by score
    // Update leaderboard document
    // Return updated leaderboard
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
