const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  dateJoined: {
    type: Date,
    required: true,
    default: Date.now,
  },
  languages: {
    type: [String],
  },
  currentLanguage: {
    type: String,
  },
  exercisesDone: {
    type: [String],
  },
  exerciseScores: {
    type: Object,
    exerciseId: {
      type: Number,
    },
    score: {
      type: Number,
      default: 0,
    },
  },
  currentLevel: {
    type: Number,
  },
});

module.exports = mongoose.model("user", UserSchema);
