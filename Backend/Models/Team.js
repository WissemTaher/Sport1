const mongoose = require("mongoose");

const teamShema = mongoose.Schema({
    name: String,
    staduim: String,
    owner: String,
    foundation: String,
    //  un tableau
    players: [{ type: mongoose.Schema.Types.ObjectId, ref: "Player", }],
});

const team = mongoose.model("Team", teamShema);



module.exports = team;