const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Comment = require('../models/comments');

// Register
router.post('/add', (req, res, next) => {
  let newComment = new Comment ({
    incident: req.body.incident,
    userName: req.body.userName,
    comment: req.body.comment
  });

  Comment.addComment(newComment, (err, comment) => {
    if(err) {
      res.json({success: false, msg: 'Failed to add comment'});
    } else {
      res.json({success: true, msg: 'Comment added'});
    }
  });
});


//Get all incidents

router.get('/getallcomments', (req, res, next) => {
  
  Comment.find({},function(err, result){
  if(err){
    console.log(err);
    res.json(err);
  }else{
    res.json(result);
  }
});
});



//Get a incident

router.get('/getcommentbyid/:id', (req, res, next) => {
  
  Comment.findOne({_id:req.params.id}).exec(function(err, result){
  if(err){
    console.log(err);
    res.json(err);
  }else{
    res.json(result);
  }
});
});




//Update Incident
router.post('/edit/:id', (req, res, next) => {
  
    Comment.findByIdAndUpdate({_id: req.params.id},{"$set":{
      incident: req.body.incident,
      userName: req.body.userName,
      comment: req.body.comment

    }}
  ).exec(function(err, edited){
    if(err){
      console.log(err);
      res.status(500).send(err);
    }else{
      res.status(200).send(edited);
    }
  });
});


//Delete Incident
router.delete('/delete/:id', (req, res, next) => {
  
  Comment.findByIdAndRemove({_id: req.params.id},function(err, deleted){
  if(err){
    console.log(err);
    res.json(err);
  }else{
    res.json(deleted);
  }
});
});

module.exports = router;