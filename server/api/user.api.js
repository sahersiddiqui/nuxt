const express = require('express')
const router = express.Router();
const $_ = require("lodash")
const User = require("../models/user.model")

router.get('/user-list', (req, res, next) => {
    User.find((err, data) => {
        if (err) {
            return next(err)
        } else {
            return res.status(200).send({ message: "User List", data })
        }
    })
});
router.post('/user', (req, res, next) => {
    req.body.password = 123456;

    User.create(req.body).
    then((user) => {
            res.status(200).send({ message: "User created" })
        })
        .catch((error) => {
            next(error)
        });
});


module.exports = router

// export default router