const express = require("express");
const path = require("path");

const port = 8100;
const db = require('./config/mongoose');
const app = express();

// contact list
let contact = [
  {
    name: "manish",
    city: "varanasi",
  },
  {
    name: "prashant",
    city: "uttarakhand",
  },
  {
    name: "sandeep",
    city: "agra",
  },
];

//setting template engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// midleware or parser
app.use(express.urlencoded());

// Reading the Static file assets
app.use(express.static('assets'));


app.get("/", function (req, res) {
  return res.render("home", {
    title: "Contact List",
    contact_list: contact,
  });
});

app.get("/practice", function (req, res) {
  return res.render("practice", { title: "Practice Page " });
});

// rendering the second demopage
app.get("/demo2", (req, res) => {
  return res.render("loop", {
    title: "Demo2 Page",
  });
});

app.post("/contact-list", function (req, res) {
  console.log(req.body);
  // contact.push({
  //     name:req.body.name,
  //     city:req.body.city
  // });
  contact.push(req.body);
  return res.redirect("/");
});

// deleting the contact
app.get('/delete-contact',(req,res)=>{
   let city = req.query.city;
   let index = contact.findIndex(contact => contact.city === city);//it will return -1 if no city found otherwise indexnumber
   if(index != -1){
    contact.splice(index,1);
   }
   return res.redirect('back');
})




app.listen(port, function (err) {
  if (err) {
    console.log("Error", err);
  }
  console.log("Express is running on port:", port);
});
