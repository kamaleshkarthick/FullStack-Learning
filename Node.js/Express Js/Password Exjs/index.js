//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming


import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";


const app = express();
const port = 4000;
/* console.log(express)
console.log("-----------------------------------------------")
console.log(app) */


const _pathName = dirname(fileURLToPath(import.meta.url))
// console.log(_pathName);

app.use(bodyParser.urlencoded({extended:true}))

app.get("/", (req, res) => {
    res.sendFile(_pathName + '/public/index.html')
})

app.post("/check", (req, res) => {

    console.log(req.body)
    req.body["password"] === "ILoveProgramming" ? res.sendFile(_pathName + '/public/secret.html') : res.redirect("/");
})

app.listen(port);


