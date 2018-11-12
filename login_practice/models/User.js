const mongoose= require('mongoose');

const userScherma= new mongoose.Schema({

    email:{
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        unique: true
    },

    password:{
        type: String,
        required: true,
        trim: true,
        minlength: 4
    }

});

module.exports=mongoose.model('users',userScherma);