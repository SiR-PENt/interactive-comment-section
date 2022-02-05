const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.use('/login',( req, res) => 
{    res.send(
    { token: 'test1234'}) })

app.listen(8080, () => console.log('app is running on localhost 8080'))

