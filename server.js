// server.js
// ==============================

// imports
const express = require("express");
const http = require("http");
const socketIo = require("socket.io")
const index = require("./rouotes/index")

// variables
const PORT = process.env.PORT || 4001;
const app = express();
app.use(index);

const server = http.createServer(app);

const io = socketIo(server); // < fun
const getApiAndEmit = socket => {
    const reponse = new Date();
    // Emitting a new message. Will be consumed by the client
    socket.emit("FromAPI", response);
};

// sockets
let interval;

io.on("connection", (socket) => {
    console.Console.log("New clientConnected");
    if (interval) {
        clearInterval(interval);
    }
    interval = setInterval (() => getApiAndEmit(socket), 1000);
    socket.on("disconnect", () => {
        console.log("Client disconnected");
        clearInterval(interval);
     });
})

// routes

// listen and port
server.listen(port, ()=> console.log(`Listneing on port ${port}`));


