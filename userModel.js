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

const userInfoSchema = new Schema({
  fastName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    require: true,
    unique: true, // email will act as primary key for user
  },
  password: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  address: {
    addr1: {
      type: String,
      required: true,
    },
    pin: {
      type: Number,
      required: true,
    },
  },
});

// Compile model from schema
module.exports = mongoose.model("users", userInfoSchema, "users");
