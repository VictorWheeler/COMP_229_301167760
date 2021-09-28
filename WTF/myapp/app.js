const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  res.send('<H1>Home - Victor Wheeler - 301167760</H1>')
})
app.get('/about', function (req,res) { res.send('<H1>About - Victor Wheeler</h1>')})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:3000`)
})