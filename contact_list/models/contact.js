const mongoose = require('mongoose');

// create schema
const contactSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    city:{
         type:String,
         required:true,
    }
});

const Contact = mongoose.model('Contact', contactSchema);

// export module
module.exports = Contact;