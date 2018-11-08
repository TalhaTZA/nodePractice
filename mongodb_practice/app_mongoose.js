const mongoose= require('mongoose');


mongoose.connect("mongodb://localhost:27017/practicemongoose",{useNewUrlParser : true});
mongoose.connection
    .once('open',()=>{console.log("Connected")})
    .on('error',(err)=>{console.log(`Could not connect ${err}`)});