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
const getApiAndEmit = "TODO";



// middleware and methods





// routes

// listen and port

