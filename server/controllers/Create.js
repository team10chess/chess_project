// import create from './models.js'
// import mongoose from 'mongoose';
const mongoose = require('mongoose');
const Create = require('../models/Create.js')

    const createData=async(req,res)=>{
    console.log("heyy")
    // alert('fhjgfghfdhy')
    // const data = {firstName:'QWEr',lastName:'gfhf',orgId:'gfh3454'}
    const {firstName,lastName,orgId}=req.body
    console.log(firstName)
    
    try{
        const newOrg = new Create({firstName:firstName,lastName:lastName,orgId:orgId})
        await newOrg.save();
        console.log("Saved")
        res.status(201).send("Data saved successfully");

    }catch(err){
        console.log(err)
                res.status(500).send("Error saving data");

    }
}
module.exports=createData;