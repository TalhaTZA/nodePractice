const mongoose= require('mongoose');
const express= require('express');
const bodyParser=require('body-parser');
const User=require('./models/User');

const app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const port = 3000 || process.env.PORT;

mongoose.Promise = global.Promise;

app.get('/',(req,res)=>{
    res.send('Root');
});

app.post('/users', async (req,res)=>{

    const user=new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        isActive: req.body.isActive
    });

    try {
        const newUser = await  user.save();
        res.json(newUser);
    } catch (error) {
        res.status(400).send('User not Saved');
    } 
        //console.log(newUser);
    
});

app.get('/users', async (req,res)=>{

    try {
        const users = await User.find({});
        res.json(users);
    } catch (error) {
        res.status(400).send('Bad Request');
    } 
        //console.log(newUser);
    
});

app.patch('/users/:id',async (req,res)=>{

    const id=req.params.id;
    const firstName=req.body.firstName;   

    try {
        
        const UpdatedUser = await User.findOneAndUpdate({_id:id} , {$set: {firstName:firstName}} , {new:true} );
        res.status(201).json(UpdatedUser);

    } catch (error) {
        console.log(error);
        res.status(400).send('Bad Request');
    }

});

app.delete('/users/:id',async (req,res)=>{

    const id=req.params.id;

    try {
        
        const deletedUser = await User.findOneAndDelete({_id:id});
        res.status(201).json(deletedUser);

    } catch (error) {
        console.log(error);
        res.status(400).send('Bad Request');
    }

});

app.listen(port,(err)=>{
    if(err) {throw err;}

    console.log(`Listening on port ${port}`);

    mongoose.connect("mongodb://localhost:27017/practicemongoose",{useNewUrlParser : true});
    mongoose.connection
        .once('open',()=>{console.log("Connected To Database")})
        .on('error',(err)=>{console.log(`Could not connect ${err}`)});
});