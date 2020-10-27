const http = require('http');
require('dotenv').config()

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end('{message:"'+ process.env.MESSAGE || "Hello world" +'"}');
});

server.listen(process.env.PORT);

console.log("The app is listening on port "+ process.env.PORT)