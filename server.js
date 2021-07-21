const dotenv = require('dotenv');
dotenv.config();
const path = require('path');
const express = require('express');
const app = express();

const DEFAULT_PORT = 8080;
const PORT = process.env.PORT || DEFAULT_PORT;

app.get('/', (req, res) => {
    return 'Server is running in ' + (PORT===8080?'default port':'.env PORT')+` ${PORT}`;
});

app.get('/secret', (req, res) => {
    return 'Secret is:' + process.env.SECRET_KEY;
});

app.get('/env', (req, res) => {
    res.send({ message: 'ENV:' + JSON.stringify(process.env) });
});

app.listen(PORT, () => {
    console.log(`Application listening on port ${PORT}!`);
});
