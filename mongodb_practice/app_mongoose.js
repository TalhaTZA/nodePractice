const mongoose= require('mongoose');
const express= require('express');
const User=require('./models/User');

const app=express();

const port = 3000 || process.env.PORT;

mongoose.Promise = global.Promise;

app.get('/',(req,res)=>{
    res.send('Root');
});

app.post('/save', async (req,res)=>{

    const user=new User({
        firstName: "Talha",
        lastName: "Ahmed"
    });

    try {
        const newUser = await  user.save();
        res.json(newUser);
    } catch (error) {
        throw error;
    } 
        //console.log(newUser);
    
});

app.listen(port,(err)=>{
    if(err) {throw err;}

    console.log(`Listening on port ${port}`);

    mongoose.connect("mongodb://localhost:27017/practicemongoose",{useNewUrlParser : true});
    mongoose.connection
        .once('open',()=>{console.log("Connected To Database")})
        .on('error',(err)=>{console.log(`Could not connect ${err}`)});
});