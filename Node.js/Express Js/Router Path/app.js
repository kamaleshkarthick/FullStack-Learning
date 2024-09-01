import express from "express";
import { dirname } from 'path';
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 8000;

const __path = dirname(fileURLToPath(import.meta.url))
console.log(__path)


// app.use(express.static(path.join(__path,'public')))
app.use(express.static('public'))
// app.use(express.static(__path +'public'))

app.get("/", (req, res) => {
    res.sendFile(__path+ "/public/home.html")
})
app.get("/Contact", (req, res) => {
    res.sendFile(__path+"/public/Contact.html")
})
app.get("/ABOUT", (req, res) => {
    res.sendFile(__path+"/public/About.html")
})

app.listen(8000, () => console.log(`Listening in  port of ${port}`))