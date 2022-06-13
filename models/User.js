const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minLength: 5,
    },
    phone:{
        type: Number,
        required: true
    }
});

const User=mongoose.model('User', userSchema, 'user');
module.exports = User;