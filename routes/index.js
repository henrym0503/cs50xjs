var express = require('express');
var router = express.Router();
var db = require('../db')

/* GET home page. */
router.get('/', function(req, res, next) {

  db.find('contact', {}, function(err, data) {
    if (err) throw err
    res.render('index', {
      title: 'Express',
      submission: null,
      entries: data
   });
 });
});

router.post('/', function(req, res, next) {

  var submission = false

  var tlds = [
    '.edu',
    '.pirate',
    '.com',
    '.net'
  ]

  for (tld in tlds) {
    if ( req.body.email.endsWith(tlds[tld]) ) {
      submission = true
    }
  }

  var data = {
    name: req.body.name,
    phonenumber: req.body.phonenumber,
    email: req.body.email,
    message: req.body.message
  }

  if ( submission ) {
    //send to database
    db.insert('contact', data, function(){
      console.log('contact')
    })
  }

  res.render('index', {
    title: 'Express',
    submission: submission,
    name: req.body.name,
    phonenumber: req.body.phonenumber,
    email: req.body.email,
    message: req.body.message
  });
});

router.get('/contact-entries', function(req, res, next) {

  db.find('contact', {}, function(err, data) {
    if (err) throw err
    res.send(data)
  })
});

// router.post('/', function(req, res, next) {
//
//   var submissionp = false
//
//   var tlds = [
//     '.edu',
//     '.org',
//     '.com',
//     '.net'
//   ]
//
//   for (tld in tlds) {
//     if ( req.body.email.endsWith(tlds[tld]) ) {
//       submission = true
//     }
//   }
//
//   var data = {
//     namep: req.body.name,
//     phonep: req.body.phonep,
//     emailp: req.body.email,
//     company: req.body.company,
//     companydescription: req.body.companydescription,
//     deadline: req.body.deadline,
//     redesign: req.body.redesign,
//     hosting: req.body.hosting,
//     domain: req.body.domain,
//     budget: req.body.budget,
//     pages: req.body.pages,
//     action: req.body.action,
//     feature: req.body.feature,
//     singlepage: req.body.singlepage,
//     responsive: req.body.responsive,
//     goodexample: req.body.goodexample,
//     badexample: req.body.badexample,
//     logo: req.body.logo,
//     branding: req.body.branding,
//     exposure: req.body.exposure,
//     target: req.body.target,
//     search: req.body.search,
//     social: req.body.social,
//     socialfeeds: req.body.socialfeeds,
//     competition: req.body.competition,
//     updates: req.body.updates
//   }
//
//   if ( submission ) {
//     //send to database
//     db.insert(db.connection, 'project', data, function(){
//       console.log('project')
//     })
//   }
//
//   res.render('index', {
//     title: 'Express',
//     submission: submission,
//     namep: req.body.name,
//     phonep: req.body.phonep,
//     emailp: req.body.email,
//     company: req.body.company,
//     companydescription: req.body.companydescription,
//     deadline: req.body.deadline,
//     redesign: req.body.redesign,
//     hosting: req.body.hosting,
//     domain: req.body.domain,
//     budget: req.body.budget,
//     pages: req.body.pages,
//     action: req.body.action,
//     feature: req.body.feature,
//     singlepage: req.body.singlepage,
//     responsive: req.body.responsive,
//     goodexample: req.body.goodexample,
//     badexample: req.body.badexample,
//     logo: req.body.logo,
//     branding: req.body.branding,
//     exposure: req.body.exposure,
//     target: req.body.target,
//     search: req.body.search,
//     social: req.body.social,
//     socialfeeds: req.body.socialfeeds,
//     competition: req.body.competition,
//     updates: req.body.updates
//   });
// });

module.exports = router;
