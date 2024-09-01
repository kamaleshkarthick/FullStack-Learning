import express from 'express'

export const router = express.Router();

router.get("/index", (req, res) => {
    res.send(`<h1> hello motherfather</h1>`)
})
router.get("/work", (req, res) => {
    res.send(`<h1> Working with</h1>`)
})

    // module.exports= router;