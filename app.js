const express = require('express');
const app = express();

const port = 3000;
require('./models');
var userCtrl = require('./controllers/userController');

app.get("/", (req, res) => {
    res.send("homepage");
});

app.get("/add", userCtrl.addUser);
app.get("/crud", userCtrl.crudOperation);
app.get("/query", userCtrl.queryData);
app.get("/finder", userCtrl.finderData);

app.listen(port, () => {
    console.log(`Server is up and running: ${ port }`);
})