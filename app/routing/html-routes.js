//Dependencies
var path = require('path');


//Routes
module.exports = function(app){

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname + '/../public/home.html'));
});

app.get('/survey', function(req, res){
  res.sendFile(path.join(__dirname + '/../public/survey.html'));
});

//Defaults to home.html if no matching route is entered
app.use(function(req, res){
  res.sendFile(path.join(__dirname + '/../public/home.html'));
})

}//End of function(app)