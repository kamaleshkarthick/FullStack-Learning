const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  
  const url = req.url;
  const method = req.method;
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
  
  //  else if (url === "/welcome" && method ==="POST") {
      
  //   res.setHeader('Content-type', 'text/html');
  //   res.write(`<html>
  //   <head>
  //   <title> Node Js</title>
  //   </head> 
  //   <body>
  //   <h1>Hi, Welcome to page</h1>
  //   </body>
    
  //   </html>`)
  //    return res.end();
  //   }
  
  if (url == '/welcome' && method == 'POST') {
     fs.writeFileSync('hello.txt','Hello faafaf')

    res.setHeader('Location', '/');
    res.statusCode = 302;
   return res.end();
  }
  
    res.setHeader('Content-type', 'text/html');
    res.write(`<html>
    <head>
    <title> Node Js</title>
    </head> 
    <body>
    <h1>Hi, e</h1>
    </body>
    
    </html>`)
     res.end();
});

server.listen(4000);
