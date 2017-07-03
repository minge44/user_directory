const express = require('express');
const path = require('path');
const mustacheExpress = require('mustache-express');

const data = require("./data.json");

const app = express();
app.use(express.static('public'));
app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.set('view engine', 'mustache')

app.get('/', function (req, res){
  app.get('/directory/:username', function(req, res) {
    // return user profile
    console.log('access username:', req.params.username);
    var userProfile = robots.users.find(function(x) {
      return x.username === req.params.username
    });
  // console.log(userProfile);
    res.render('user.mustache', userProfile);
  });


 res.render('index', {users:data.users})
});

app.listen(3000, function () {
  console.log('Successfully started express application!');
})
