// import mongoose from "mongoose";
const mongoose = require('mongoose');

const createSchema = new mongoose.Schema({
    firstName : {type: String, required:'Firstname is required'},
    lastName : {type: String, required:'Lastname is required'},
    orgId : {type: String, required:'ID is required'},
})

// mongoose.model('create', Create)
const Create=mongoose.model('Create', createSchema);
module.exports=Create;