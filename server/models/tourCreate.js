// import mongoose from "mongoose";
const mongoose = require('mongoose');

const tourCreateSchema = new mongoose.Schema({
    tourId : {type: String, required:'Firstname is required'},
    format : {type: String, required:'Lastname is required'},
    num : {type: String, required:'ID is required'},
})

// mongoose.model('create', Create)
const tourCreate=mongoose.model('tourCreate', tourCreateSchema);
module.exports=tourCreate;