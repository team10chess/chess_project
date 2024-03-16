// import express from 'express'
// import createData from '../controllers/Create';

const express = require('express');
const JoinData = require('../controllers/Join');


const useRouter= express.Router();
useRouter.post('/Join',JoinData);

// export default useRouter;
module.exports = useRouter;
