// import express from 'express'
// import createData from '../controllers/Create';

const express = require('express');
const createData = require('../controllers/Create');


const useRouter= express.Router();
useRouter.post('/create',createData);

// export default useRouter;
module.exports = useRouter;
