
var express = require('express');
var app = express();
var fs = require('fs');

var port = process.env.PORT || 3001;

app.get('/',function(req, res){

	res.writeHead(200, {'content-type' : 'text/plain'});
	fs.createReadStream(__dirname +'/greet.txt').pipe(res);

})
app.get('/api/product/:num1/:num2', function(req, res) {
	var num1 = req.params.num1 ;
	var num2 = req.params.num2;
	var product = num1*num2 ;
 
	 res.send('<html><head></head><body><h1 style = {font-size : 16px}>Product of two parameters: ' + product + '</h1></body></html>');
   res.status('200');
   
});
app.use(express.json());

app.post('/api/string',function(req,res){
   var nameString = req.body.name;
   var nonRepeating;
   for (var i = 0; i < nameString.length; i++) {
    var c = nameString.charAt(i);
    if (nameString.indexOf(c) == i && nameString.indexOf(c, i + 1) == -1) {
    	nonRepeating = c;
      
      break;
    }
  }
  
  res.send('First non repeating character:' + nonRepeating, 200);
  
  
});

app.post('/api/upload',function(req,res) {
    var filePath = req.body.filePath;
    var getName = filePath.slice(filePath.lastIndexOf("/") + 1, filePath.length+1);
	var readable = fs.createReadStream(filePath);
	var writable = fs.createWriteStream(__dirname + '/uploads/' + getName);
	readable.pipe(writable);
   res.status('200');
});

app.listen(port);

module.exports = app;
