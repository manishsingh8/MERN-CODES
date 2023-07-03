const express = require('express');
const path = require('path');

const port =8100;
const app = express();

// contact list
let contact = [
    {
        name:'manish',
        city:'varanasi'
    },
    {
        name:'prashant',
        city:'uttarakhand'
    },
    {
        name:'sandeep',
        city:'agra'
    }

]

//setting template engine
app.set('view engine','ejs');
app.set('views',path.join(__dirname, 'views'));



app.get('/',function(req,res){
     return res.render('home',{
        title:"Contact List",
        contact_list:contact
    }
     
     );
});



app.get('/practice',function(req,res){
    return res.render('practice',{title:"Practice Page "});
});


app.post('/contact-list',function(req,res){
    // return res.redirect('/practice');
})





app.listen(port,function(err){
    if(err){
        console.log("Error",err);
    }
    console.log("Express is running on port:",port);
});