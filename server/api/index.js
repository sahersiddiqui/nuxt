const app = require('express')
const router = app.Router();
require("../models/admin.model")
const auth = require("./auth.api")
const user = require("./user.api")

router.get('/', function(req, res) {
    res.send("all ok")
})
router.use(auth)
router.use(user)

// module.exports = { path: '/api', handler: app }
module.exports = router