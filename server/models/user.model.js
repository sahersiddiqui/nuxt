var mongoose = require('mongoose');



// Define schema
var Schema = mongoose.Schema;

var User = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        require: true,
    },
    mobile: {
        type: Number,
        require: true
    },
    gender: {
        type: String,
        require: true
    },
    created_at: {
        type: Date,
        default: Date.now()
    },
    updated_at: {
        type: Date,
        default: Date.now()
    }
});

// Compile model from schema
var Model = mongoose.model('user', User);

module.exports = Model
    // export default Model