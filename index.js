const express = require("express");
const dotenv = require("dotenv");
const mongo = require('./shared/connect');
const userRouter = require('./routes/user');
const customerRouter = require('./routes/customer');
const groupRouter = require('./routes/group');
const registerRouter = require('./routes/register');
const authorise = require('./modules/authorize');
const indexRouter = require('./routes/index');
const emailRouter = require('./routes/email.js')
const cors = require("cors");

dotenv.config();


const app = express();
// To convert req.body into json format
app.use(express.json());
mongo.connect();
app.use(cors());

app.use('/', indexRouter);
app.use('/register', registerRouter);

app.use(authorise.AuthorizeUser);
app.use('/customer', customerRouter);
app.use('/user', userRouter);
app.use('/group', groupRouter);
app.use('/emailer', emailRouter);



app.listen(process.env.PORT || 3002);
