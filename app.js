var express = require('express');
var app = express();
var port = 3001;
app.set('view engine', 'ejs');
app.set('views', __dirname+'/views');
app.use(express.static('project'));

app.get('/', function(req, res){
    res.render('view');
})
app.get('/women', function(req, res){
    res.render('women');
})
module.exports = app;


app.listen(port, ()=>{
    console.log('Server start on port' + port);
})
