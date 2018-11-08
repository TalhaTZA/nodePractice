const mongoose= require('mongoose');
const express= require('express');

const app=express();

const port = 3000 || process.env.PORT;

app.listen(port,(err)=>{
    if(err) {throw err;}

    console.log(`Listening on port ${port}`);

    mongoose.connect("mongodb://localhost:27017/practicemongoose",{useNewUrlParser : true});
    mongoose.connection
        .once('open',()=>{console.log("Connected To Database")})
        .on('error',(err)=>{console.log(`Could not connect ${err}`)});
});