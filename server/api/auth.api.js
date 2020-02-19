const express = require('express')
const router = express.Router();
const { check, validationResult } = require('express-validator');
const $_ = require("lodash")
const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken')

const User = require("../models/user.model")
const Admin = require("../models/admin.model")


//register user
router.post(
    '/register', [
        // username must be an email
        check('name').not().isEmpty(),
        // password must be at least 5 chars long
        check('email').isEmail()

    ],
    async(req, res, next) => {
        // Finds the validation errors in this request and wraps them in an object with handy functions
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).send({ errors: errors.array() });
        }
        try {
            req.body.password = 123456;
            user = new User(req.body);
            await user.save();
            const token = await user.generateAuthToken();
            res.send({ token });
        } catch (error) {
            next(error)
        }
        // User.create(req.body).then((user) => { res.send(User.generateAuthToken()) }).catch((error) => {
        // next(error)
        // });
    }
);

/* login user */
router.post('/login', (req, res, next) => {
    if (req.body.client == 'user') {
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
    } else if (req.body.client == 'admin') {
        Admin.findOne({ email: req.body.email }, async(err, data) => {
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
    }
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