const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
var createError = require('http-errors');

const app = express()

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'

async function start() {
    // Init Nuxt.js
    const nuxt = new Nuxt(config)

    const { host, port } = nuxt.options.server

    //connecting to database
    await mongoose.connect('mongodb://localhost:27017/new', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 5000
    }).then((data) => {
        console.log("Db connect successfully")

    }).catch((e) => {
        console.log("Db connection error")
        process.exit(1);

    });

    app.use(bodyParser.json()) // for parsing application/json
    app.use(bodyParser.urlencoded({ extended: true }))

    //include api routes
    app.use('/api', require('../api/index'))


    app.use('/api', function(req, res, next) {
        next(createError(404));
    })

    // error handler
    app.use(function(err, req, res, next) {
        // set locals, only providing error in development
        // res.locals.message = err.message;
        // res.locals.error = req.app.get('env') === 'development' ? err : {};

        res.status(err.status || 500);
        // res.send({ "error": err.toString() });
        res.send(err);
    });


    // Build only in dev mode
    if (config.dev) {
        const builder = new Builder(nuxt)
        await builder.build()
    } else {
        await nuxt.ready()
    }

    // Give nuxt middleware to express
    app.use(nuxt.render)



    // Listen the server
    app.listen(port, host)
    consola.ready({
        message: `Server listeningss on http://${host}:${port}`,
        badge: true
    })
}
start()