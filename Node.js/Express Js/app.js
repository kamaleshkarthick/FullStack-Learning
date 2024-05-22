const http = require("http");
const express = require("express");
// console.log(express);
const app = express();
// console.log(app);

// app.use(() => {
//     console.log("jhh");
// })


const server = http.createServer(app);
server.listen(4000);