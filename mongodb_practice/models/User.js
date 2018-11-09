const mongoose= require('mongoose');

const UserSchema = new mongoose.Schema({
    
    firstName:{
        type: String,
        required: true,
        trim : true,
        minlength : 4
    },
    lastName:{
        type: String,
        required: true,
        trim : true,
        minlength : 4
    },
    isActive:{
        type: Number,
        default: 0 
    }
});

const userModel=mongoose.model('users',UserSchema);

module.exports = userModel;