const express= require('express');
const mongoose= require('mongoose');

const app=express()

const port = 3000 || process.env.PORT ;


app.listen(port,(err)=>{
    if(err){console.log(err);}

    console.log(`Listening on port ${port}`);

    mongoose.connect("mongodb://localhost:27017/practicelogin",{useNewUrlParser : true},(err)=>{
        if(err){console.log(err);}

        console.log('Connected to Database');
    });

});