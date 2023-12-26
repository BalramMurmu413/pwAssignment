const http = require('http')
let PORT = 3000;

const server  = http.createServer((req, res)=>{

     if(req.url == '/'){
        res.statusCode = 200;
        res.setHeader( 'Content-Type','text /plain')
        res.end('Welcome Men & Woman Dummy Data')
     }

     else if(req.url == '/men'){
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify( {} )) 
           }
      
      else if(req.url == '/profile/:userName' ){
         res.statusCode = 200;
         res.setHeader('Content-Type', 'text/plain')

      res.sent(`sorry the product : ${userName},  your are looking for not temporary available`)
     }
})

server.listen(PORT, function(req, res){

    console.log(`server is started at port : ${PORT}`)
})