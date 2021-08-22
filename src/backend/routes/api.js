const express = require('express');
const router = express.Router();
const User = require('../model/user');
const jwt = require('jsonwebtoken');
router.get('/', (req,res) => {
    res.send('Hello from api')
});

router.post('/register', (req,res) => {
    let userData = req.body;
    let user = new User(userData)
    user.save((error, registration) => {
        if(error) {
            console.log(error);
        } else {
            let payload = {subject: registration._id}
            let token = jwt.sign(payload, 'secretKey')
            res.status(200).send({token})
        }
    })
})


router.post('/login', (req,res) => {
    let userData = req.body

    User.findOne({email: userData.email}, (error, user) => {
        if(error) {
            console.log(error);
        }else{
            if(!user) {
                res.status(401).send("Invalid email")
            }else {
                if(user.password !== userData.password) {
                    res.status(401).send("Invalid password")
                }else {
                    let payload = {subject: user._id}
                    let token = jwt.sign(payload, 'secretKey')
                    res.status(200).send({token})
                }
            }
        }
    })
})


module.exports = router