var http = require ('http');
var WebSocketServerConstructor = require('websocket').server;
var big_history = require('./big_history');

var Server = http.createServer();

var WebSocketServer = new WebSocketServerConstructor({
	httpServer: Server,
	autoAcceptConnections: true,
    fragmentationThreshold: 104857600
});

WebSocketServer.on('connect', function(connection) {

    console.log((new Date()) + 'Peer ' + connection.remoteAddress + ' Connection accepted.');
    
    connection.sendUTF(JSON.stringify(big_history));
    
    connection.on('close', function(reasonCode, description) {
        console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' disconnected. (' + description + ')');
    });
    
});

Server.listen(4080, '0.0.0.0');
console.log((new Date()) + ' Server start.');