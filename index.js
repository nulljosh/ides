const express = require('express')
    , app = express();

const PORT = 1337 || process.env.PORT;

app.get('/', (req, res) => {
    res.send('/');
});

app.listen(PORT, () => {
    console.log(`watching http://localhost:${PORT}`)
});