const mongoose = require("mongoose");
const playerShema = mongoose.Schema({
    name: String,
    age:Number,
    position:String,
    nbre:Number,
    // un objet
    teamId:{type:mongoose.Schema.Types.ObjectId,
        ref:"Team"}

})
const player = mongoose.model("Player",playerShema);

module.exports=player;