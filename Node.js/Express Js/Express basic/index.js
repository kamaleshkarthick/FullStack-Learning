import express from 'express';

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello there");
})
app.get("/there", (req, res) => {
    res.send("Hello Express Js");
})
app.get("/d", (req, res) => {
    res.send("Hello D");
})



app.listen(port,()=> console.log(`server running ${port}`))