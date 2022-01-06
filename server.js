const express = require('express');
const app = express();
const PORT = process.env.PORT || 8001;
const db = require(__dirname+'/Models/db');



app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/Views/landing.html")
})

app.get('/coin',(req,res)=>{
    res.sendFile(__dirname+'/Views/coin.html');
});

app.get('/login',(req,res)=>{
    res.sendFile(__dirname+'/Views/login.html');
})

app.get('/addUser',(req,res)=>{
    var fname = req.query.Fname;
    var lname = req.query.Lname;
    var email = req.query.Email;
    var passWord = req.query.Password;
    db.user.collection.insertOne({
        FirstName:fname,
        LastName:lname,
        Email:email,
        Password:passWord,
        Token:[1000,0,0,0,0,0,0]
    },(err,result)=>{
        if(err){
            res.json(false);
        }else{
            res.json(true);
        }
    })
})

app.get('/checkUser',async (req,res)=>{
    var email = req.query.Email;
    var pass = req.query.Password;
    var result = await db.user.find({Email:email,Password:pass});
    if(result.length>0){
        res.json({logged:true,data:result});
    }else{
        res.json({logged:false,data:[]});
    }
})

app.get('/updateToken',(req,res)=>{
    var email = req.query.Email;
    var pass = req.query.Pass;
    var token = req.query.token.split(',')
    console.log(email,pass,token);
    db.user.findOneAndUpdate({Email:email,Password:pass}, {Token:token}, function (err, place) {
        if(err){
            res.json(false);
        }else{
            res.json(true);
        }
    });
})

app.get('/getAll',async (req,res)=>{
    var result = await db.user.find();
    console.log(result);
    res.json(result);
})

app.listen(PORT,()=>{
    console.log("http://localhost:"+8001);
})