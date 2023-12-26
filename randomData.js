const express = require('express')
const app = express();


function randomNumberGenerator(){
    return Math.floor(Math.random() * 10);    

}

let randomNumber = randomNumberGenerator()




app.get('/',(req, res) => { 
res.statusCode = 200;
res.setHeader("Content-Type","application/json")
res.end(JSON.stringify({ Random : `${randomNumber}`}))

})


let PORT = 2030;

app.listen(PORT, ()=>{
    console.log(randomNumber)
    console.log(`server started at lacalhost port numebr is :${PORT} `)
})