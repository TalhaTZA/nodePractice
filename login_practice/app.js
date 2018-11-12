const express= require('express');
const mongoose= require('mongoose');
const bodyParser= require('body-parser');
const User= require('./models/User');

const app=express()

const port = 3000 || process.env.PORT ;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/register', async (req,res)=>{

    const user = new User({
        email : req.body.email,
        password : req.body.password
    });

    try {
        const result = await user.save();
        res.json(result);
    } catch (error) {
        res.status(400).json(error);
    }

});


app.listen(port,(err)=>{
    if(err){console.log(err);}

    console.log(`Listening on port ${port}`);

    mongoose.connect("mongodb://localhost:27017/practicelogin",{useNewUrlParser : true},(err)=>{
        if(err){console.log(err);}

        console.log('Connected to Database');
    });

});