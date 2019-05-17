const mongoose = require('mongoose');
const express = require('express');
const config = require('../config/database');
const router = express.Router();

// User Schema
const CommentSchema = mongoose.Schema ({
  incident: {
    type: String,
    // required: true
  },
  email: {
    type: String,
    required: true
  },
  comment: {
    type: String,
    // required: true
  },
  time : {
    type : Date, 
    default: Date.now 
  }
});

const Comment = module.exports = mongoose.model('Comment', CommentSchema);

module.exports.addComment = function(newComment, callback) {
    newComment.save(callback);
}



  