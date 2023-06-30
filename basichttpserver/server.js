
var http = require('http');
const port = 8000;
var uc = require('upper-case');
const fs = require('fs');


function requestHttp(req,res){
   
    res.writeHead(200,{'content-type':'text/html'});

    let filepath;

    switch(req.url){
        case'/demo1':
            filepath = './demo.html';
            break
        case'/demo2':
             filepath = './demo2.html';
             break
        default:
             filepath = './Errorpage.html';
             break            
}
    fs.readFile(filepath,function(err,data){
        if(err){
            console.log(err);
            return
        }
        res.write(data);
        res.end();
    })
   
}

const server = http.createServer(requestHttp);

server.listen(port,function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log("Server is running on port:",port);
});
