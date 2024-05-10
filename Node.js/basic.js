const http = require('http');



const server = http.createServer((req, res) => {
    console.log(req.method);
    // process.exit();
    res.setHeader('Content-type', 'text/html');
    res.write(`<html>
    <head>
    <title> Node Js</title>
    </head> 
    <body>
    <h1>Hello</h1>
    </body>
    
    </html>`)
    res.end();
    
});
server.listen(4000);