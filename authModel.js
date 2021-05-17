//Require Mongoose
const mongoose = require("mongoose");

//Define a schema

mongoose.connect("mongodb://127.0.0.1/test", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.on("open", console.error.bind(console, "Connection Established"));

const Schema = mongoose.Schema;

const authSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Compile model from schema
module.exports = mongoose.model("auth", authSchema, "auth");
