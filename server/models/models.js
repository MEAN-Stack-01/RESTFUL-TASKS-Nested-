const mongoose = require('./mongoose');
var validate = require('mongoose-validator');

var TaskSchema = new mongoose.Schema({
  title : {
    type: String,
    required: [true, "Name is required"],
  },
  description: {
    type: String,
    default : "",
  },
  completed: {
    type: Boolean,
    default : false
  },
},{timestamps: true})

module.exports = TaskSchema
