
const express = require('express');

const port =8100;

const app = express();

app.get('/home',function(req,res){
    res.send("The server is running");
});


app.listen(port,function(err){
    if(err){
        console.log("Error",err);
    }
    console.log("Express is running on port:",port);
})