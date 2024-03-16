// import create from './models.js'
// import mongoose from 'mongoose';
const mongoose = require('mongoose');
const Create = require('./models.js')

const createData=(a,b,c)=>{
    console.log("heyy")
    // alert('fhjgfghfdhy')
    // const data = {firstName:'QWEr',lastName:'gfhf',orgId:'gfh3454'}
    console.log(a)
    console.log('fhjgfdhy')
    const newOrg = new Create({firstName:a,lastName:b,orgId:c})
    try{
        newOrg.save()
        console.log("Saved")
    }catch(err){
        console.log(err)
    }
}
module.exports=createData;