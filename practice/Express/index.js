const express = require('express');
const port = 2000;

const app = express();

app.get('/',function(req,res){
    console.log(req);
    res.send("The express is running fine");
})

app.listen(port,function(err){
    if(err){
        console.log("Error",err);
    }
    console.log("The express server is running on port:",port);
})