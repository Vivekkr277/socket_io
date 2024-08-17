const express = require('express');
const http = require('http');
const path = require('path');
const {Server} = require('socket.io');

const app  = express();

const server = http.createServer(app);
const io = new Server(server);

//socket io
io.on('connection',(socket) => {
    socket.on('user-message',(message) => {
        io.emit('message',message);
        // console.log('message is : ',message);
    });
     
 })

app.use(express.static(path.resolve("./public")));
app.get('/',(req, resp) => {
    return resp.sendFile("./public/index.html");
})

server.listen(8000,() => {
    console.log('server listening on port 8000');
})

