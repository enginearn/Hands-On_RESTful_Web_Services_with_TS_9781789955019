const _ = require('lodash');
const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset: utf-8' });
    let randomNumber = _.random(0, 100);
    res.end(`Hey, my server is running! nad I got a random number ${randomNumber}!`);
}).listen(3000);

console.log('Server running at http://localhost:3000/\nPress Ctrl+C to quit.');