const express = require('express');

const fs = require('fs');

const data = fs.readFileSync('productos.txt', 'utf-8')

const app = express();

app.get('/', (req, res) => {
    res.send("<h1>Introduce /productos o /productoalazar</h1>")

});

app.get('/productos', (req, res) => {
    res.send(`${data}`)

});

app.get('/productoRandom', (req, res) => {
    res.send(`${data}`)

});

const PORT = 8080;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));



