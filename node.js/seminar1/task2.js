const http = require('http');

const server = http.createServer((req, res) => {
    // console.log("Запрос получен");
    // res.writeHead(200, {
    //     'Content-Type': 'text/html; charset=utf-8'
    // });
    // res.end('<h1>Hello</h1>');
    res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
    if (req.url === '/') {
        res.end(`<a href="/about">Обо мне</a>`);
    } else if (req.url === '/about') {
        res.end(`<a href="/">Главная</a>`);
    } else {
        res.end(`<h3>Page not found!</h3>`);
    }
})

const port = '3000';

server.listen(port);