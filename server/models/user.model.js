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
        unique: [true, "Email already exist"],
        // validate: [true, "Email should have a valid syntax e.g: example@example.com"]
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


// Handler **must** take 3 parameters: the error that occurred, the document
// in question, and the `next()` function
User.post('save', function(error, doc, next) {
    if (error.name === 'MongoError' && error.code === 11000) {
        next(new Error('There was a duplicate key error', 422));
    } else {
        next(error);
    }
});


// Compile model from schema
var Model = mongoose.model('user', User);
module.exports = Model
    // export default Model