const express = require("express")
const app = express()



let number = 0


app.get("/", (req, res) => {
    res.sendStatus = 200;
    res.setHeader("Content-Type", "application/json")
    res.send(JSON.stringify({Counter : `${number}`}))
})



app.post("/increment", (req, res) => {
    res.sendStatus = 200;
    res.setHeader("Content-Type", "application/json")
    number++;
    res.send(JSON.stringify({Counter : `${number } `}))
})



app.post("/decrement", (req, res) => {
    res.sendStatus = 200;
    res.setHeader("Content-Type", "application/json")
    number--;
    res.send({Counter:  `${number}`})
})



app.listen(3000, () => {
  console.log("Server is running on port 3000")
})