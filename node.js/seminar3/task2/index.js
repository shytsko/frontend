const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send(`<a href="/about">Обо мне</a><h2>Главная</h2>`);
})

app.get('/about', (req, res) => {
    res.send(`<a href="/">Главная</a><h2>Обо мне</h2>`);
})


app.listen(3000);