// import mongoose from "mongoose";
const mongoose = require('mongoose');

const tourCreateSchema = new mongoose.Schema({
    tourId : {type: String, required:true},
    format : {type: String, required:true},
    num_of_players : {type: Number, required:true},
    orgId : {type: String, required:true, ref:createSchema},
    createdOn:{type: Date, default:Date.now},

})

// mongoose.model('create', Create)
const tourCreate=mongoose.model('tourCreate', tourCreateSchema);
module.exports=tourCreate;