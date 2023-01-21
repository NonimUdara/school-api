const mongoose = require('mongoose');
//const bcrypt = require('bcryptjs');
const config = require('../config/database');

// User Student
const Schema = mongoose.Schema({
    name: {
        type: String,
    },
    date: {
        type: String,
    },
    title: {
        type: String,
    },
    duration: {
        type: String,
    },
    link: {
        type: String,
    },
    id: {
        type: String,
    },
    passcode: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Maths', Schema);

module.exports.add = function(newMeeting, callback){
            newMeeting.save(callback);
}