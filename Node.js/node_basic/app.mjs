import http from "http";
// const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-type", "text/html");
  res.write(
    `<html>
    <head>
    <title> Node Js</title>
    </head> 
    <body>
    <h1>Hi,thereeee</h1>
    </body>
    
    </html>`
  );
  res.end();
});
server.listen(8000);
