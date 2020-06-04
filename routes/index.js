// index.js
// ==============================

// imports
const express = require("express");
const router = express.Router();

// routes/middleware
router.get("/", (req, res)=> {
    res.send({ response: "I am alive"}).status(200);
});

// exports
module.exports = router;

// author fix