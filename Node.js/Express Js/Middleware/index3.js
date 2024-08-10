import express from "express";

const app = express();
const port = 3000;


const customMiddleware = (req, res, next) => {
  console.log(req.url);
  console.log(req.method)
  next();
}

app.use(customMiddleware);

app.get("/", (req, res) => {
  res.send("Hello");
});
app.post("/there", (req, res) => {
  res.send("Hello there");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
