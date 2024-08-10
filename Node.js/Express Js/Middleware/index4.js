import express from "express";
import bodyParser from "body-parser";
import { dirname } from 'path';
import { fileURLToPath } from "url";

const ___dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req, res) =>{
  
  res.sendFile(___dirname + "/public/index.html")
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
