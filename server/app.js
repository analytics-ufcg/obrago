var express = require('express');
var bodyParser = require('body-parser');
var convenioRouter = require('./routes/convenio.js');

var morgan = require('morgan');
var app = express();
app.use(morgan('dev'));

app.use(function(err, req, res, next){
	console.log(err.stack);
    return res.status(500);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

app.use('/convenio', convenioRouter);


app.listen(3000, function(){console.log('Listening')});
