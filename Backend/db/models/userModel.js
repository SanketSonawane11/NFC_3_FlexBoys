const mongoose = require("mongoose");
const { number } = require("zod");

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        maxLength: 100
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 1024
    },
    role: {
        type: String,
        required: true,
        enum: ['user']
    },
    phone: {
        required: true,
        type: Number,
        maxLength: 10,
        minlength: 10
    }
});

const adoptedSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    },
    adopted: {
        type: Number,
        required: true
    }
})

const User = mongoose.model("User", userSchema);
const Adopted = mongoose.model("Account", adoptedSchema);

module.exports = {
    User,
    Adopted
};
