const express = require('express')
const { check, sanitizeBody, body, validationResult } = require('express-validator');
const router = express.Router();

const User = require("../models/user.model")

//create user
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

module.exports = router