const express = require("express");
const bodyParser = require("body-parser");
const router = require('./network/routes');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extends: false}));
//app.use(router);
router(app);


app.listen(3000);
console.log("conectando http://localhost:3000");



