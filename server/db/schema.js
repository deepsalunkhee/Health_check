const mongoose=require('mongoose');


//Defining all the schemas

//userschema
const userSchema=new mongoose.Schema({
 
    email:{
        type:String,
        required:true
    },
    passwordHash:{
        type:String,
        required:true
    }
    
})





exports.User=mongoose.model('User',userSchema);


