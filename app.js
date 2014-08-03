var nconf = require('nconf');
var https = require('https');
var express = require('express');
var fs = require('fs');

var app = express();
app.use(express.static(__dirname + '/client'));


// use these environment variables or pull from config file
nconf.env(['PORT'])
    .file({ file: 'config.json' });

nconf.defaults({
    'PORT': '33333',
});



var options = {
    key: fs.readFileSync('test-key.pem'),
    cert: fs.readFileSync('test-cert.pem')
}
 
var server = https.createServer(options, app);


app.get('/', function(req, res) {
    res.sendfile('client/index.html', {root: __dirname })
});


console.log('listening on port ' + nconf.get('PORT'));

server.listen(nconf.get('PORT'));

