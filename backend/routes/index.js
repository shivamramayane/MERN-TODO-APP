import express from "express";
// const express = require('express')
import taskRoutes from './Tasks.js'
import authRoutes from './auth.js '
import usersRoutes from './user.js'
import checkAuth from "../utils/checkAuth.js";
// import checjAuth from "../utils/checjAuth.js";
// const taskRoutes = require('./Tasks.js')
// import router from "./Tasks.js";
const router = express.Router()

router.use('/auth',authRoutes)
router.use('/task', checkAuth ,taskRoutes)
router.use('/users',checkAuth,usersRoutes);

// module.exports= router;
export default router;