const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.setHeader("Content-type", "text/html");
    res.write(`<html>
    <head>
    <title> Node Js</title>
    </head> 
    <body>
    <form action="/welcome" method="POST">
    <input type="text" name="Username" placeholder="enter the name">
    <input type="submit" name="send">
    </form>
    </body>
    
    </html>`);
    return res.end();
    }
  else if (url === "/welcome") {
      
    res.setHeader('Content-type', 'text/html');
    res.write(`<html>
    <head>
    <title> Node Js</title>
    </head> 
    <body>
    <h1>Hi, Welcome to page</h1>
    </body>
    
    </html>`)
     return res.end();
    }
});
server.listen(4000);
