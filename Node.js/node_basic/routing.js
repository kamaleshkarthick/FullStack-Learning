const http = require("http");
const fs = require("fs");
const { buffer } = require("stream/consumers");

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
  
   if (url === "/welcome" && method ==="POST") {
      
    res.setHeader('Content-type', 'text/html');
    res.write(`<html>
    <head>
    <title> Node Js</title>
    </head> 
    <body>
    <h1>Hi, Welcome to page</h1>
    </body>
    
    </html>`)
    // res.end()
     return res.end();
    }
  
  /* if (url == '/welcome' && method == 'POST') {
   
    const body = [];
    req.on("data", (data) => {
      body.push(data);
    })
    req.on("end", () => {
      const parseBody = Buffer.concat(body).toString();
      console.log(parseBody);
     })

     fs.writeFileSync('hello.txt','Hello faafaf')

    res.setHeader('Location', '/');
    res.statusCode = 302;
   return res.end();
  }
   */

    res.setHeader('Content-type', 'text/html');
    res.write(`<html>
    <head>
    <title> Node Js</title>
    </head> 
    <body>
    <h1>Hi,There Node.js</h1>
    </body>
    
    </html>`)
     res.end();
});

server.listen(4000);
