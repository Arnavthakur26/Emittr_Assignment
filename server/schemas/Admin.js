const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const AdminSchema = new Schema({
  name: String,
  email: String,
  password: String,
  role: "admin",
});

module.exports = mongoose.model("admin", AdminSchema);
