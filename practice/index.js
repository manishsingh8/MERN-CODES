const http = require('http');
const fs = require('fs');
const port  = 9000;

function requestHandler(req,res){
    res.writeHead(200,{'content-type':'text/html'});
     fs.readFile('./demo.html',function(err,data){
          if(err){
            console.log("error",err);
            return;
          }
          res.write(data);
          res.end();
     });
}

const server = http.createServer(requestHandler);

server.listen(port,function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log("server is running on port:",port);
})

