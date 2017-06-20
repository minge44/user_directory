const express = require('express');
const path = require('path');
const mustacheExpress = require('mustache-express');

const data = require("./data.js");

const app = express();

app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.set('view engine', 'mustache')

app.get('/', function (req, res){



 res.render('index', { img: data.users[0].avatar })
});

app.listen(3000, function () {
  console.log('Successfully started express application!');
})
