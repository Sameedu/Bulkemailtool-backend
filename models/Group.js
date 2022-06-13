const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const groupSchema = new Schema({
    group_name:{
        type:String,
        minLength: 5,
        required: true
    },
    group_list:{
        type: [String],
        required: true
    },
    group_createdate:{
        type: String,
        required: true
    },
    group_description:{
        type: String
    }
});

const Group=mongoose.model('Group', groupSchema, 'group');
module.exports = Group;