const express = require('express')
const router = express.Router();
const $_ = require("lodash")
const User = require("../server/models/user.model")

/* GET users listing. */
router.post('/login', (req, res, next) => {
    User.findOne({ mobile: req.mobile, password: req.password }, (err, data) => {
        if (err) {
            return next(err)
        } else {
            if (!$_.isEmpty(data)) {
                return res.send(data)
            } else {
                return res.status(422).send({ message: "Invalid credentials" })
            }
        }
    })
});

module.exports = router

// export default router