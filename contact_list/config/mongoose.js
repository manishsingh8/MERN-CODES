// require the library
const mongoose =  require('mongoose');

// connect to the database
mongoose.connect('mongodb://127.0.0.1:27017/contact-list-db');

// acquire the connection to check if successfull
const db = mongoose.connection;

// error
db.on('error', console.error.bind(console, 'error while connecting to DB'));

// up and running then print this message
db.once('open',function(){
    console.log('Successfully connected to the DataBase');
});

