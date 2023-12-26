const express = require("express")
let PORT = 2020;
const app = express();



app.get("/" , (req, res) =>{
    res.statusCode =200;
    res.setHeader("Content-Type" , "text/plain")
    res.send(" I am home page")
})


app.get("/about" , (req, res) =>{
    res.statusCode =200;
    res.setHeader("Content-Type" , "text/plain")
    res.send("I am about page ")
})



app.get("/:username" , (req, res) =>{
    res.statusCode =200;
    res.setHeader("Content-Type" , "text/plain")
    res.send(`Error in finding : ${req.params.username}`)
})




app.get("/contact" , (req, res) =>{
    res.statusCode =200;
    res.setHeader("Content-Type" , "application/json")
    res.send(JSON.stringify({Email: "support@pwskills.com"}))
})


app.listen(PORT ,  (req, res) => {
    console.log(`Server is started at localhost :${PORT}`)
})