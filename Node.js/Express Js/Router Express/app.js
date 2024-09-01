import express from "express"
import { router } from './Router/admin.js'
import {routers} from './Router/shop.js'

const app = express();
const port = 4000;



app.use(router);
app.use('/shop', routers);

app.get("/", (req, res) => {
    res.send(`<h1> hello There!</h1>`)
})


app.use("*",(req, res) => {
    res.status(404).send(`<h1> 404 not Found</h1>`)
})




app.listen(port, () => {
    console.log(`sever is working in ${port}`)
})