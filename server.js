var http = require('http');
var express = require('express');
var app = express();
var path = require('path');

var redirectroutes = require('./src/config/apiroute');

app.use(express.static(path.join(__dirname, 'dist/Skilltest')));

app.use('/skillsapi',redirectroutes);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/Skilltest/index.html'))
});

const port = process.env.PORT || '5300';

app.set('port',port);

const server = http.createServer(app);

server.listen(port,() => console.log(`API running on localhost:${port}`));
