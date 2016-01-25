var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.of('/api/io').on('connection', function(socket){
	console.log('connection');

	// chat
	socket.on('AuthLogin', function(msg){
		console.log('AuthLogin: ' + msg);
		var rtn = `
	{
	    "Token": "xxxxx", // Token令牌。有效期为15分钟。每次成功调用API，都会延期15分钟
	}
		`;
		socket.emit('AuthLogin', rtn);
	});

	// news
	socket.on('AuthLogout', function(msg){
		console.log('AuthLogout: ' + msg);
		var rtn = `
	{
	    // 无
	}
		`;
		socket.emit('AuthLogout', rtn);
	});



});



http.listen(80, function(){
  console.log('listening on *:80');
});