require('dotenv').config()
const path = require('path');
const express = require('express');
const app = express();

const DEFAULT_PORT = 8080;
const PORT = process.env.PORT || DEFAULT_PORT;
const HOST = '0.0.0.0';

app.get('/', (req, res) => {
    console.log('request /');
    res.send('Server is running in ' + (PORT===8080?'default port':'.env PORT')+` ${PORT}`);
});

app.get('/secret', (req, res) => {
    console.log('request /secret');
    res.send('Secret is:' + process.env.SECRET_KEY);
});

app.get('/env', (req, res) => {
    console.log('request /env');
    res.send(JSON.stringify(process.env));
});

const server = app.listen(PORT, HOST, () => {
    console.log(`Application listening on port http://${HOST}:${PORT}`);
});

process.on('SIGINT', () => {
    console.log('Closing server...');
    server.close();
    process.exit()
});
