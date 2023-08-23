const mongoose = require("mongoose");

const connectToMongo = (mongoURI) => {
  mongoose.connect(mongoURI).then(() => console.log("Connected to mongodb"));
};

module.exports = connectToMongo;
