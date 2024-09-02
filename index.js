const express = require('express')
    , app = express()
    , bodyParser = require('body-parser')
    , pug = require('pug');
    

const PORT = 1337 || process.env.PORT;

app.use(bodyParser.json());
app.set('view engine', 'pug');
app.use(express.static('css'));

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(PORT, () => {
    console.log(`👉 http://localhost:${PORT}`)
});