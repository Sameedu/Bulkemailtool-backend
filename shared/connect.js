require('dotenv').config();
const mongoose = require("mongoose")
exports.connect = () => {
    try{
        mongoose.connect(process.env.DB_CONN_ENDPOINT);
        console.log("MongoDB Connected")
    } catch(err) {
        console.log(err);
    }
}