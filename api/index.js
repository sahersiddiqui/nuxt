const app = require('express')
const router = app.Router();
const register = require("./signup.api")
const login = require("./login.api")

router.get('/', function(req, res) {
    res.send("all ok")
})
router.use(register)
router.use(login)

// module.exports = { path: '/api', handler: app }
module.exports = router