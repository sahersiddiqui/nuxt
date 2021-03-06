const express = require('express')
const router = express.Router();
const $_ = require("lodash")
const bcrypt = require("bcryptjs")
const User = require("../models/user.model")
const jwt = require('jsonwebtoken')

/* login user */
router.post('/login', (req, res, next) => {
    User.findOne({ mobile: req.body.mobile }, async(err, data) => {
        if (err) {
            return next(err)
        } else {
            if (!$_.isEmpty(data)) {
                var isPasswordMatch = await bcrypt.compare(req.body.password, data.password)
                if (isPasswordMatch) {
                    const token = await data.generateAuthToken();
                    return res.send({ message: "Login successfully", token })
                }
                return res.status(422).send({ message: "Invalid credentials" })

            } else {
                return res.status(422).send({ message: "Invalid credentials" })
            }
        }
    })
});
router.get('/user', (req, res, next) => {
    const token = req.header('authorization').replace("Bearer ", "");
    const user = jwt.verify(token, process.env.jwtKey);
    User.findOne({ _id: user._id }, (err, data) => {
        if (err) {
            return next(err)
        } else {
            if (!$_.isEmpty(data)) {
                return res.send({ message: "Login successfully", data })
            } else {
                return res.status(422).send({ message: "Invalid credentials" })
            }
        }
    })
});
router.post('/logout', (req, res, next) => {
    const token = req.header('authorization').replace("Bearer ", "");
    const user = jwt.verify(token, process.env.jwtKey);
    User.findOne({ _id: user._id }, async(err, data) => {
        if (err) {
            return next(err)
        } else {
            if (!$_.isEmpty(data)) {
                await data.destroyAuthToken();
                return res.send({ message: "Logout successfully" })
            } else {
                return res.status(422).send({ message: "Unable to logout" })
            }
        }
    })
});

module.exports = router

// export default router