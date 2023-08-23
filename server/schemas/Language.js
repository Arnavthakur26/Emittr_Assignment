const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const LanguageSchema = new Schema({
  languageCode: String,
  name: String,
  nativeName: String,
  description: String,
  exercises: [String], // references to exerciseIds
});

module.exports = mongoose.model("language", LanguageSchema);
