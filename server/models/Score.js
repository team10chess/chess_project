const mongoose = require('mongoose');


export const scoreSchema = mongoose.Schema({
    playerId : {type: String, required:true, ref:playerSchema},
    rounds : {type: [Number], required:true}
})

const Score=mongoose.model('Score', scoreSchema);
module.exports=Score;