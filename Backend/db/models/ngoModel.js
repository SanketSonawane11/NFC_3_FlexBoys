const mongoose = require("mongoose");

const ngoSchema = new mongoose.Schema({
    ngoName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 100
    },
    city: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    address: {
        type: String,
        required: true,
        trim: true,
        maxLength: 200
    },
    description: {
        type: String,
        required: true,
        trim: true,
        maxLength: 500
    },
    logo: {
        type: String,
        required: true
    },
    certification: {
        type: String,
        required: true
    }
});

const NGO = mongoose.model("NGO", ngoSchema);

module.exports = {
    NGO
};
