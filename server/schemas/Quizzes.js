const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const quizSchema = new Schema({
  language: {
    type: String,
    required: true,
  },
  questions: [
    {
      text: {
        type: String,
        required: true,
      },
      options: [
        {
          text: {
            type: String,
            required: true,
          },
          isCorrect: {
            type: Boolean,
            required: true,
          },
        },
      ],
      correctOption: {
        type: String,
        required: true,
      },
    },
  ],
});

const Quiz = mongoose.model("quizzes", quizSchema);

module.exports = Quiz;
