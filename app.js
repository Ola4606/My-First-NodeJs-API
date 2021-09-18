const express = require('express');
const morgan = require('morgan');

const auth = require('./routers/auth.js');
const people = require('./routers/people.js');

const app = express();

app.use(morgan('tiny'));
app.use(express.json()); //to read incoming json payload

app.use('/auth', auth); //login middleware
app.use('/people', people); //people middleware



app.listen(5000, () => {
 console.log('Thank GOD');
});