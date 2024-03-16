// import express from 'express'
// import mongoose from 'mongoose'
// import cors from 'cors'
// import dotenv from 'dotenv'
// import userRoutes from './routes/Create.js'

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const userRoutes = require('./routes/Create.js');
const userRoutes1 = require('./routes/tourCreate.js');
const userRoutes2 = require('./routes/Join.js');



const app=express();
dotenv.config();
app.use(express.json({limit:'30mb', extended:true}))
app.use(express.urlencoded({limit:'30mb', extended:true}))
app.use(cors());
app.get('/',(req,res)=>{
    res.send("This is chess API");
})



app.use('/user', userRoutes)
app.use('/user', userRoutes1)
app.use('/user', userRoutes2)


const PORT = 5000

const DATABASE_URL = 'mongodb+srv://ChessProject:Team10%40123@cluster0.lffck.mongodb.net/?retryWrites=true&w=majority';
mongoose.set('strictQuery', false);
mongoose.connect(DATABASE_URL, {useNewUrlParser:true, useUnifiedTopology:true})
    .then(()=> app.listen(PORT,()=>{
        console.log("Listening...");
    }))
    .catch((err)=>console.log(err.messages))

module.exports=app;    