const http = require('http');
require('dotenv').config()

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: process.env.MESSAGE }));
});

server.listen(process.env.PORT || 3000);

console.log("The app is listening on port " + (process.env.PORT || 3000))