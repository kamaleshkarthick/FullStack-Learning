import express from "express";
import bodyParser from "body-parser";
// import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from "url";

const __pathname = dirname(fileURLToPath(import.meta.url));
// console.log(import.meta.url);
// console.log(fileURLToPath(import.meta.url));
// console.log(__pathname)

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req, res) =>{
  
  res.sendFile(__pathname + "/public/index.html")
  // res.sendFile(path.join(__pathname, '.','public','index.html'))
})
app.post("/submit", (req, res) =>{
  

  const bandName = req.body["street"] + req.body["pet"];
  
  res.send(`
    <h1> Your BrandName</h1>
    <h3>${bandName} </h3>
    `)
})


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
