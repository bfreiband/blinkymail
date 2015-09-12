var twilio = require('twilio'),
client = twilio('ACCOUNTSID','AUTHTOKEN');

var Firebase = require('firebase'),
messagesRef = new Firebase('FIREBASESITE');
messagesRef.on('child_added', function(snapshot) {
	console.log( 'New text received')
})

var express = require('express'),
bodyParser = require('body-parser'),
app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

app.post('/message', function (req, res) {
	var sentText = req.body.Body;
	messagesRef.push(sentText);
	console.log(sentText);
	var resp = new twilio.TwimlResponse();
	resp.message('Your text was received! >(^._.^)<');
	res.writeHead(200, {
		'Content-Type':'text/xml'
	});
	res.end(resp.toString());
});

var server = app.listen(4567, function() {
	console.log('Listening on port %d', server.address().port);
});