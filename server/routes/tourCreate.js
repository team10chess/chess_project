// import express from 'express'
// import createData from '../controllers/Create';

const express = require('express');
const tourCreateData = require('../controllers/tourCreate');


const useRouter= express.Router();
useRouter.post('/tourCreate',tourCreateData);

// export default useRouter;
module.exports = useRouter;
