const app = require('express')
const router = app.Router();
const register = require("./signup.api")

router.use(register)

// module.exports = { path: '/api', handler: app }
module.exports = router