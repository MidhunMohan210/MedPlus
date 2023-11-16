import express from 'express'
import {updateUser,deleteUser,getAllUser,getSingleUser,
getUserProfile,getMyAppointments,getAvailableSlots,getAvailableDates,cancelBooking} from '../controllers/userController.js'
import { saveBookingData } from '../controllers/bookingController.js'
import {getSingleDoctor} from '../controllers/doctorController.js'
import { makePayment,sessionStatus } from '../controllers/paymentController.js'
import {restrict,authenticate} from '../auth/verifyToken.js'
import { authenticatePatient } from '../authentication/userAuth.js'
import { singleUpload } from '../multer/multer.js';

const router = express.Router();

router.get('/getSingleUser/:id',authenticate,restrict(['patient']), getSingleUser)
router.get('/getAllUser',authenticate,restrict(['admin']),getAllUser)
router.delete('/deleteUser/:id',authenticate,restrict(['patient']),deleteUser)
router.put('/updateUser/:id',authenticate,restrict(['patient']),singleUpload,updateUser)
router.get('/getUserProfile',authenticate,restrict(['patient']),getUserProfile)
router.get('/getMyAppointments',authenticate,restrict(['patient']),getMyAppointments)
router.get('/getSingleDoctor/:id',getSingleDoctor)
router.get('/getAvailableSlots',authenticate,restrict(['patient']),getAvailableSlots)
router.get('/getAvailableDates/:id',authenticate,restrict(['patient']),getAvailableDates)
router.post('/makePayment',authenticate,restrict(['patient']),makePayment)
router.get('/session-status',authenticate,restrict(['patient']),sessionStatus)
router.post('/saveBookingData',authenticate,restrict(['patient']),saveBookingData)
router.put('/cancelBooking/:id',authenticate,restrict(['patient']),cancelBooking)



export default router;