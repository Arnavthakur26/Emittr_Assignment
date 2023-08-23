const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const LeaderboardSchema = new Schema({
  language: {
    type: String,
    required: true,
  },
  leaders: [
    {
      name: {
        type: String,
        required: true,
      },
      score: {
        type: Number,
        required: true,
      },
    },
  ],
});

module.exports = mongoose.model("leaderboard", LeaderboardSchema);
