// import create from './models.js'
// import mongoose from 'mongoose';
const mongoose = require('mongoose');
const tourCreate = require('../models/tourCreate.js')

    const tourCreateData=async(req,res)=>{
    console.log("heyy")
    // alert('fhjgfghfdhy')
    // const data = {firstName:'QWEr',lastName:'gfhf',orgId:'gfh3454'}
    const {tourId,format,num}=req.body
    // console.log(firstName)
    
    try{
        const newOrg = new tourCreate({tourId:tourId,format:format,num:num})
        await newOrg.save();
        console.log("Saved")
        res.status(201).send("Data saved successfully");

    }catch(err){
        console.log(err)
                res.status(500).send("Error saving data");

    }
}
module.exports=tourCreateData;