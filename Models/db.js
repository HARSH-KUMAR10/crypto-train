const mongoose = require("mongoose");

var db = 'mongodb+srv://root:root123@cluster0.fuz20.mongodb.net/crypto-train?retryWrites=true&w=majority';

mongoose.connect(db).then(()=>{
    console.log("connected");
}).catch((err)=>{
    console.log("Error : "+err);
});


var users = new mongoose.Schema({
    FirstName : String,
    LastName : String,
    Email : String,
    Password : String,
    Token:Array
})



const user = mongoose.model('users',users);


module.exports ={user};