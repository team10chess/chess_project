const mongoose = require('mongoose');

export const playerSchema = mongoose.Schema({
    playerId : {type: String, required:true},
    name : {type: String, required:true},
    rating : {type: Number, required:true},
    wWin : {type: String, required:true},
    bWin : {type: String, required:true},
})

const Player=mongoose.model('Player', playerSchema);
module.exports=Player;