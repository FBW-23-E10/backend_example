const express = require('express');
const morgan = require('morgan');
require("dotenv").config();
const userRouter = require('./routers/user.router.js');
const orderRouter = require('./routers/order.router.js');
const { notFound, errHandler } = require('./middlewares/errorHandlers');

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(morgan('tiny'));


// routers
app.use('/user', userRouter);
app.use('/order', orderRouter);

console.log(process.env.API_KEY);
if(app.get('env') === 'development'){
    console.log('hi developer!');
}

if(app.get('env') === 'production'){
    console.log('hi cloud user!');
}

// error handlers
app.use(notFound)
app.use(errHandler)



const port = process.env.PORT || 5000;
app.listen(port, console.log('Server is up on port:', port));