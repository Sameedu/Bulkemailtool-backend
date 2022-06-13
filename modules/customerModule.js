const Customer = require('../models/Customer');
const dateTime = require('node-datetime');

var dt = dateTime.create();
var date_timefmt= dt.format('m_d_Y-H_M_S');

exports.createcustomer = async (req,res,next) => {
    
    const customer = new Customer({
        cust_name : req.body.cust_name,
        cust_email : req.body.cust_email,
        cust_address : req.body.cust_address,
        cust_phone : req.body.cust_phone,
        cust_createdate: date_timefmt,
        cust_purchase_category: req.body.cust_purchase_category
    })

    try{
        var response = await customer.save();
        res.send(response);
    } catch (err) {
        res.status(500).send(err)
    }
}

exports.getcustomer = async (req,res,next) => {
    try{
        var response = await Customer.find();
        res.send(response);
    } catch(err) {
        res.status(500).send(err)
    }
}

exports.updatecustomer = async (req,res,next) => {

    try {
        const id = req.params.id;
        var response = await Customer.findByIdAndUpdate(id, {
            cust_email : req.body.cust_email,
            cust_address : req.body.cust_address,
            cust_phone : req.body.cust_phone,
            cust_purchase_category: req.body.cust_purchase_category
        }, {new: true})
        res.send(response);
    } catch(err) {
        res.status(500).send(err)
    }
}

exports.deletecustomer = async (req,res,next) => {

    try{
        const id = req.params.id;
        var response = await Customer.findByIdAndRemove(id);
        res.send(response)
    } catch(err) {
        res.status(500).send(err)
    }
}

exports.listemailids = async (req,res,next) => {
    try{
        var response = await Customer.find({}).select('cust_name cust_email ');
        res.send(response);
    } catch(err) {
        res.status(500).send(err)
    }
}

