const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = new Schema({
    cust_name:{
        type:String,
        minLength: 5,
        required: true
    },
    cust_email:{
        type: String,
        required: true
    },
    cust_address:{
        type:String,
        required: true
    },
    cust_phone:{
        type: Number,
        required: true
    },
    cust_createdate:{
        type: String,
        required: true
    },
    cust_purchase_category:{
        type:[String],
        enum: {
            values: ['cakes','breads','confectionary','misc'],
            message: '{VALUE} is not a valid purchase category'
        }
    }
});

const Customer=mongoose.model('Customer', customerSchema, 'customer');
module.exports = Customer;