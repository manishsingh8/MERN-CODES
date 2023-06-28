var http = require('http');
http.createServer(function (req,res){
    res.write('Hello');//write the response which will display after running on port 8090
    res.end();//end the response
}).listen(8090);


