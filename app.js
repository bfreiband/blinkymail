var twilio = require('twilio'),
client = twilio('ACCOUNTSID','AUTHTOKEN');

var express = require('express'),
bodyParser = require('body-parser'),
app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

app.post('/message', function (req, res) {
	var resp = new twilio.TwimlResponse();
	resp.message('Thanks for subscribing, we don\'t actually care though ^^;');
	resp.writeHead(200, {
		'Content-Type':'text/xml'
	});
	res.end(resp.toString());
});

var server = app.listen(3000, function() {
	console.log('Listening on port %d', server.address().port);
});