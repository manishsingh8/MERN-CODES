
var http = require('http');
const port = 8000;

const fs = require('fs');

function requestHttp(req,res){
   console.log(req.url);
   if(req.url === "/home"){
    res.writeHead(404,{'content-Type':'text/html'});
    res.write("This is Home Page");
    res.end();
   }
   else{
    res.writeHead(200,{'content-type':'text/html'});
    fs.readFile('demo.html',function(err,data){
        if(err){
            console.log(err);
            return;
        }
        res.write(data);
        res.end();
    })
     
   }
}

const server = http.createServer(requestHttp);

server.listen(port,function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log("Server is up and running on port",port);
});
