
var http = require('http');
const port = 8000;

function requestHttp(req,res){
   console.log(req.url);
   res.writeHead(200,{'Contetn-Type':'text/html'});
   res.write("Server Created");
   res.end();
}

const server = http.createServer(requestHttp);

server.listen(port,function(err){
    if(err){
        console.log(err);
    }
    console.log("Server is up and running on port",port);
});
