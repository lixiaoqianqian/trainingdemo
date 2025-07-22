// http
const http = require('http');

// 2. create http server 
const server = http.createServer((req,res) =>{
    res.statusCode = 200;
    res.setHeader ('Content-Type','text/plain');
    res.end('Hello from node.js\n');
});

// 3.start the server
const port = 3000;
server.listen(port,() => {
    console.log(`Server running at http://localhost:${port}/`);
});
