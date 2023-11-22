import express from 'express'
import {createReview} from '../controllers/reviewController.js'
import { authenticate } from '../auth/verifyToken.js'


const router=express.Router();

router.post('/createReview',authenticate,createReview)


export default router