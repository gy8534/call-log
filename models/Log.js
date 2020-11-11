const mongoose = require("mongoose");

const LogSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    trim: true,
    default: "outgoing"
  },
  name: {
    type: String,
    trim: true,
    default: ""
  },
  contact: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  duration: {
    type: String,
    default: "-"
  },
  sim: {
      type: String,
      required: true
  }
});

const Log = mongoose.model("Log", LogSchema);

module.exports = Log;
