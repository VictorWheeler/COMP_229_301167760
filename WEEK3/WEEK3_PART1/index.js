const express = require('express');
const app = express();
const port = 3000;

app.get('/',(req, res) => {
    res.send("Welcome");
})
app.get('/info',(req, res) => {
    res.send("Welcome to info");
})
app.get('/about',(req, res) => {
    res.send("Welcome to about");
})

app.listen(port, () => {
    console.log("Our first express application");
})