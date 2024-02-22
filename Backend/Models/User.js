const mongoose = require("mongoose");
var uniqueValidator = require('mongoose-unique-validator');
const userSchema=mongoose.Schema({
firstName:String,
lastName:String,
email:{type:String,unique: true},
password:String,
role:String,
avatar:{type:String},
});

const user=mongoose.model("User",userSchema);
userSchema.plugin(uniqueValidator);
module.exports=user;

