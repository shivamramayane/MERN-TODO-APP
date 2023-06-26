import express from 'express'
import { createtask, deletetask, getalltask, getcurrentusertask, updatetask } from '../controllers/task.js';
// const express = require('express')

 const router = express.Router();

router.post('/',createtask)
router.get('/all',getalltask)
router.get('/mytasks',getcurrentusertask)
router.put('/:taskid',updatetask)
router.delete('/:taskid',deletetask)
export default router;
// module.exports=router;
