const express = require("express");
const cors = require("cors");

const app = express()
app.use(cors())
app.use(express.json())

const port = 8000

const heros = []

app.get("/heros", (req, res) => {
    res.json(heros)
})

app.post("/heros", (req, res) => {
    const newHero = req.body
    heros.push(newHero)
    res.json({
        message: "Hero added",
        newHero
    })

})
app.get("*", (req, res) => {
    res.json({
        message: "This route does not exist"
    })
})

app.listen(port, () => {
    console.log("server is listening in port", port)
})