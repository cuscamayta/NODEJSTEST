var express = require('express');  
var app = express();  
var server = require('http').Server(app);  
var io = require('socket.io')(server);  


app.get('/', function (req, res) {
  console.log('entro aqui');
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
  socket.on('chat message', function (msg) {
    io.emit('chat message', msg);
  });
});

server.listen(process.env.PORT || 3000)
console.log('listening on *:3000');

// http.listen(3500, function () {
//   console.log('listening on *:3500');
// });
