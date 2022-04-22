const express = require('express');
let router = require('express').Router();


const User = require('../models/user.models')


router.route('/').get((req, res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

// User.find().then((users)=>{
//     res.send({users});
//      }).catch((err)=>{
//        res.status(400).send(err);
//       });


router.route("/add").post((req, res) => {
    const username = req.body.username;

    const newUser = new User({username});

    newUser.save()
    .then(() => res.json("User Added!"))
    .catch(err => res.status(400).json('Error: ' + err));
    
})




// router
// .route("/use")
// .get((req, res) => {
//     console.log("Set new Name")
//     res.send("Set new name")
// })
// .post((req, res) => {
//     console.log("New request Send")
// })


module.exports = router;