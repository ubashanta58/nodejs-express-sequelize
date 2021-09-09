const express = require('express');
const app = express();

const port = 3000;
require('./models');

app.get("/", (req, res) => {
    res.send("homepage");
});

app.listen(port, () => {
    console.log(`Server is up and running: ${ port }`);
})