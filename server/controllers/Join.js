// import create from './models.js'
// import mongoose from 'mongoose';
const mongoose = require('mongoose');
const Join = require('../models/Join.js')

    const JoinData=async(req,res)=>{
    console.log("heyy")
    // alert('fhjgfghfdhy')
    // const data = {firstName:'QWEr',lastName:'gfhf',orgId:'gfh3454'}
    const {tourId,playerId}=req.body
    // console.log(firstNam)
    
    try{
        const newOrg = new Join({tourId:tourId,playerId:playerId})
        await newOrg.save();
        console.log("Saved")
        res.status(201).send("Data saved successfully");

    }catch(err){
        console.log(err)
                res.status(500).send("Error saving data");

    }
}
module.exports=JoinData;