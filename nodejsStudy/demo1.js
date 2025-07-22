// http server
const http = require('http');

// 5.connect html page with node.js
const path = require('path');

// 7.read file system
const fs = require('fs');

// 2. create http server 
const server = http.createServer((req,res) =>{

    // 6.connect path
    const filePath = path.join('../javascriptStudy/panda.html');
    // 8.read file system
    fs.readFile(filePath, 'utf-8',(err, content)=>{
        res.writeHead(200,{'Content-Type': 'text/html'});
        res.end(content);
    });

    // res.statusCode = 200;
    // res.setHeader ('Content-Type','text/plain');
    // res.end('Hello from node.js\n');
});

// 3.start the server
const port = 3000;
server.listen(port,() => {
    console.log(`Server running at http://localhost:${port}/`);
});

