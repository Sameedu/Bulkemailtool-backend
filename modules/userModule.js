const User = require('../models/User');

exports.createuser = async (req,res,next) => {   
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone
    })

    try{
        var response = await user.save();
        res.send(response);
    } catch (err) {
        res.status(500).send(err)
    }
}

exports.getuser = async (req,res,next) => {
    try{
        var response = await User.find();
        res.send(response);
    } catch(err) {
        res.status(500).send(err)
    }
}

exports.updateuser = async (req,res,next) => {

    try {
        const id = req.params.id;
        var response = await User.findByIdAndUpdate(id, {
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            password: req.body.password,
        }, {new: true})
        res.send(response);
    } catch(err) {
        res.status(500).send(err)
    }
}

exports.deleteuser = async (req,res,next) => {

    try{
        const id = req.params.id;
        var response = await User.findByIdAndRemove(id);
        res.send(response)
    } catch(err) {
        res.status(500).send(err)
    }
}