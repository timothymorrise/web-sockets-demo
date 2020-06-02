// App.js
// ==============================

// imports
import React, { useState, useEffect } from 'react';
import socketIOClient from "socket.io"'
const ENDPOINT = "http://127.0.0.1:4001"

// component
const App = () => {
  const [ response, setResponse ] = useState("");

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("FromAPI", data => {
      setResponse(data);
    });
  }, []);

  return (
    <p>
      It's <time dateTime={response}>{response}</time>
    </p>
  );
}



export default App;
