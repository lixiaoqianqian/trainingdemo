const express = require('express');
const app = express();
const port =  3000;

// 假设 index.html 在项目根目录的 public 文件夹里，根据实际路径调整
const path = require('path'); 

// 配置静态文件目录，这样浏览器能直接访问该目录下的文件
app.use(express.static(path.join(__dirname, 'public'))); 


// in-memory data
let users = [
    {id: 1, name:'John Doe'},
    {id: 2, name:'Jane Smith'},
    {id: 3, name:'Alice Johnson'}

];

// middleware to parse JSON bodies
app.use(express.json());

// path = require('path');
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// }); 

// GET endpoint to retrieve all users
app.get('/users', (req, res) => {
    res.json(users);
});

// post endpoint to create a new user
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length + 1; // simple ID assignment
    users.push(newUser);
    res.status(201).json(newUser);
});

// start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});