const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Incident = require('../models/incidents');
const _ = require('lodash');
"use strict";
const nodemailer = require("nodemailer");

// Add an incident
router.post('/add', (req, res, next) => {
  let newIncident = new Incident ({
    submittedBy: req.body.submittedBy,
    submittedTo: req.body.submittedTo,
    submittedFrom: req.body.submittedFrom,
    priority:req.body.priority,
    currentStatus:req.body.currentStatus,
    assignedTo:req.body.assignedTo,
    issue:req.body.issue
  });

  Incident.addIncident(newIncident, (err, incident) => {
    if(err) {
      res.json({success: false, msg: 'Failed to add incident'});
    } else {
      res.json({success: true, msg: 'incident added'});
    }
  });
});


//Get all incidents

router.get('/getallincidents', (req, res, next) => {
  
  Incident.find({},function(err, result){
  if(err){
    console.log(err);
    res.json(err);
  }else{
    res.json(result);
  }
});
});



//Get an incident

router.get('/getincidentbyid/:id', (req, res, next) => {
  
  Incident.findOne({_id:req.params.id}).exec(function(err, result){
  if(err){
    console.log(err);
    res.json(err);
  }else{
    res.json(result);
  }
});
});

//Create Comment
router.post('/createcomment/:id', (req, res, next) => {
  Incident.findOneAndUpdate({_id: req.params.id},{ $push: {
    comments: [req.body]
  }}).then(doc => {
    console.log(doc);
    res.status(200).send({success:true, message:doc});
  }).catch(err=> {
    res.status(500).send({success:false, message:err});
  })
});




//Update Incident
router.post('/edit/:id', (req, res, next) => {
  
    Incident.findOneAndUpdate({_id: req.params.id},{"$set":{
        submittedBy:req.body.submittedBy,
        submittedTo :req.body.submittedTo,
        submittedFrom:req.body.submittedFrom,
        priority:req.body.priority,
        currentStatus:req.body.currentStatus,
        assignedTo:req.body.assignedTo,
        issue:req.body.issue,

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
  
  Incident.findByIdAndRemove({_id: req.params.id},function(err, deleted){
  if(err){
    console.log(err);
    res.json(err);
  }else{
    res.json(deleted);
  }
});
});


// //Mail

// // async..await is not allowed in global scope, must use a wrapper
// async function main(){

//   // Generate test SMTP service account from ethereal.email
//   // Only needed if you don't have a real mail account for testing
//   let testAccount = await nodemailer.createTestAccount();

//   // create reusable transporter object using the default SMTP transport
//   let transporter = nodemailer.createTransport({
//     host: "smtp.ethereal.email",
//     port: 587,
//     secure: false, // true for 465, false for other ports
//     auth: {
//       user: "amitkumar.sharma@quantiphi.com", // generated ethereal user
//       pass: "mahqvdaaxvkuyoub" // generated ethereal password
//     }
//   });

//   // send mail with defined transport object
//   let info = await transporter.sendMail({
//     from: '"Fred Foo 👻" <foo@example.com>', // sender address
//     to: "bar@example.com, baz@example.com", // list of receivers
//     subject: "Hello ✔", // Subject line
//     text: "Hello world?", // plain text body
//     html: "<b>Hello world?</b>" // html body
//   });

//   console.log("Message sent: %s", info.messageId);
//   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

//   // Preview only available when sending through an Ethereal account
//   console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
//   // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
// }

module.exports = router;
