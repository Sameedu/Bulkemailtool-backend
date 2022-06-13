const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const hbs = require('nodemailer-handlebars');
const log = console.log;

require('dotenv').config();

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    refreshToken: process.env.REFRESH_TOKEN
  }
});

  // transporter.use('compile', hbs({
  //   viewEngine: 'express-handlebars',
  //   viewPath: './views/'
  // }));


 router.post('/email',  (req, res) => {
      const { email, subject, message } = req.body;


      let mailOptions = {
        from: 'ram60103106039@gmail.com',
        to: `${email}`,
        subject: `${subject}`,
        text: `${message}`,
        // template: 'index',
        // context: {
        //     name: 'Accime Esterling'
        // } // send extra values to template
    };

    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });

  })

module.exports = router;