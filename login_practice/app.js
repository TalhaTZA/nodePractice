const express= require('express');
const mongoose= require('mongoose');
const bodyParser= require('body-parser');
const bcrypt= require('bcryptjs');
const User= require('./models/User');

const app=express()

const port = 3000 || process.env.PORT ;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/register', (req,res)=>{

    const user = new User({
        email : req.body.email,
        password : req.body.password
    });


    bcrypt.genSalt(10,(err,salt)=>{
        if(err){res.status(400).json(err);}

        bcrypt.hash(user.password,salt, async (err,hash)=>{
        
            if(err){res.status(400).json(err);}
            user.password=hash;
            try {
                const result = await user.save();
                res.json(result);
            } catch (error) {
                res.status(400).json(error);
            }
        });
    });
});

app.post('/login', async (req,res)=>{

    try {
        const user = await User.findOne({email:req.body.email});
        
        bcrypt.compare(req.body.password , user.password , (err,success)=>{
            if (err){res.status(400).json(err);}

            if (success) {res.json({success});}

            else {res.json({success});}

        });

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