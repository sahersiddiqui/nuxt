const express = require('express')
const { check, sanitizeBody, body, validationResult } = require('express-validator');
const router = express.Router();

const User = require("../server/models/user.model")

/* GET users listing. */
router.get('/register', (req, res, next) => {

    User.find({}, (err, data) => {
        if (err) {
            return next(err)
        } else {
            return res.send(data)
        }
    })
});

//create user
router.post(
    '/register', [
        // username must be an email
        check('name').not().isEmpty(),
        // password must be at least 5 chars long
        check('email').isEmail()

    ],
    (req, res, next) => {
        // Finds the validation errors in this request and wraps them in an object with handy functions
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }

        User.create(req.body).then((user) => res.json(user)).catch((error) => {
            next(error)
        });
    }
);

/**
 * Get Single user detail
 */
router.get(
    'user/:id',
    (req, res, next) => {
        User.find({ _id: req.params.id }).then((user) => res.send(user));
    }
);
/**
 * Update  user detail
 */
router.put(
    'user/:id',
    (req, res, next) => {
        User.find({ _id: req.params.id }).update(req.body).then((user) => res.send(user));
    }
);

module.exports = router

// export default router