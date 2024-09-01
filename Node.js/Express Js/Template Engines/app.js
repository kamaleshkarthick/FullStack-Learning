import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 8000;

app.get("/", (req, res) => {
    res.send(`<h1>hello there ! </h1>`)
})


app.listen(port, () =>
{
    console.log(`Server is running on ${port}`);
});