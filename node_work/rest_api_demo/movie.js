const express = require('express');
const app = express();
const port =  3000;

// 假设 index.html 在项目根目录的 public 文件夹里，根据实际路径调整
// const path = require('path'); 

// 配置静态文件目录，这样浏览器能直接访问该目录下的文件
// app.use(express.static(path.join(__dirname, 'public'))); 
path = require('path');
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'movie.html'));     
});    


// in-memory data
let movies = [
    {id: 1, name:'寄生虫',year:2019},
    {id: 2, name:'长安十二时辰',year:2019},
    {id: 3, name:'流浪地球',year:2019}   
];

// middleware to parse JSON bodies
app.use(express.json());

// GET endpoint to retrieve all movies
app.get('/movies', (req, res) => {
    res.json(movies);
});

// POST endpoint to create a new movie
app.post('/movies', (req, res) => {
    const newMovie = req.body;
    newMovie.id = movies.length + 1; // simple ID assignment
    movies.push(newMovie);
    res.status(201).json(newMovie);
}); 

// start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});