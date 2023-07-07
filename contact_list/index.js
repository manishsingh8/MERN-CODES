const express = require("express");
const path = require("path");

const port = 8100;
const db = require("./config/mongoose");
const Contact = require("./models/contact");

const app = express();

//setting template engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// midleware or parser
app.use(express.urlencoded());

// Reading the Static file assets
app.use(express.static("assets"));

// contact list
let contact = [
  {
    name: "manish",
    id: "varanasi",
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

app.get("/", function (req, res) {
  Contact.find({})
    .then((dbContacts) => {
      return res.render("home", {
        title: "Contact List",
        contact_list: dbContacts,
      });
    })
    .catch((err) => {
      console.log("Error in fetching dbContacts");
      return;
    });
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
  // contact.push(req.body);

  Contact.create({ name: req.body.name, city: req.body.city })
    .then((newContact) => {
      console.log("********", newContact);
      return res.redirect("back");
    })
    .catch((err) => {
      console.log("error in creating a contact:", err);
      // Handle the error appropriately
      return res.redirect("back");
    });
});

// deleting the contact
app.get("/delete-contact", (req, res) => {
  // get the id from parameters id
  let id = req.query.id;
  console.log(id);

  // fint the contact with id in databse and delete it
  Contact.findByIdAndDelete(id)
  .then((id)=>{
        console.log('contact deleted successfully');
        return res.redirect('back');
   })
   .catch((err)=>{
    console.log('Error while deleting the contact');
    return;
   })
});

app.listen(port, function (err) {
  if (err) {
    console.log("Error", err);
  }
  console.log("Express is running on port:", port);
});
