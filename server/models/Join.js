// import mongoose from "mongoose";
const mongoose = require('mongoose');

const JoinSchema = new mongoose.Schema({
    tourId : {type: String, required:'Firstname is required'},
    playerId : {type: String, required:'Lastname is required'},
})

// mongoose.model('create', Create)
const Join=mongoose.model('Join', JoinSchema);
module.exports=Join;