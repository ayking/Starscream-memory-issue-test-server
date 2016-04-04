# Starscream-memory-issue-test-server
This server to reproduce the memory issue

``npm install``

``node app.js``

1. Connect to the server with Starscream and receive the data with default setting and it will crash after few seconds
2. Update the BUFFER_MAX to 16384
3. Connect to the server with Starscream and receive the data successfully.

Sample client code
```
socket = WebSocket(url: NSURL(string: "ws://localhost:8080/")!)
//websocketDidConnect
socket.onConnect = {
    print("websocket is connected")
}
//websocketDidDisconnect
socket.onDisconnect = { (error: NSError?) in
    print("websocket is disconnected: \(error?.localizedDescription)")
}
//websocketDidReceiveMessage
socket.onText = { (text: String) in
    print("got some text: \(text)")
}
//websocketDidReceiveData
socket.onData = { (data: NSData) in
    print("got some data: \(data.length)")
}
//you could do onPong as well.
socket.connect()
```
