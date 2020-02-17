var mongoose = require('mongoose');
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

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
    password: {
        type: String,
        required: true,
        minLength: 7
    },
    tokens: [{
        token: {
            type: String,
        }
    }],
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

User.pre('save', async function(next) {
    // Hash the password before saving the user model
    const user = this
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }
    next()
})


User.methods.generateAuthToken = async function() {
    // Generate an auth token for the user
    const user = this
    const token = jwt.sign({ _id: user._id }, process.env.jwtKey)
    user.tokens = user.tokens.concat({ token })
    await user.save()
    return token
}

User.methods.destroyAuthToken = async function() {
    // Generate an auth token for the user
    const user = this
    user.tokens = []
    await user.save()
    return user
}


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