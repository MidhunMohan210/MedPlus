import express from 'express'
import {updateDoctor,deleteDoctor,getAllDoctor,getSingleDoctor,getDoctorProfile,getMyAppointments,addTimeSlots,getAvailableDates,getAvailableSlots
,removeSlots,deleteQualification,deleteExperience,cancelAppointment} from '../controllers/doctorController.js'
import {getDoctorRooms,getRoomMessages,sendChat} from '../controllers/chatController.js'
import {authenticateDoctor,restrict} from '../auth/verifyDoctorToken.js'
import { multipleUpload} from "../multer/multer.js";


const router = express.Router();

router.get('/getSingleDoctor/:id',getSingleDoctor)
router.get('/getAllDoctor',getAllDoctor)
router.delete('/deleteDoctor/:id',authenticateDoctor,restrict(['doctor']),deleteDoctor)
router.put('/updateDoctor/:id',authenticateDoctor,restrict(['doctor']),multipleUpload,updateDoctor)
router.get('/getDoctorProfile',authenticateDoctor,restrict(['doctor']),getDoctorProfile)
router.get('/getMyAppointments',authenticateDoctor,restrict(['doctor']),getMyAppointments)
router.post('/addTimeSlots',authenticateDoctor,restrict(['doctor']),addTimeSlots)
router.get('/getAvailableDates',authenticateDoctor,restrict(['doctor']),getAvailableDates)
router.get('/getAvailableSlots/:date',authenticateDoctor,restrict(['doctor',]),getAvailableSlots)
router.get('/removeSlots',authenticateDoctor,restrict(['doctor']),removeSlots)
router.delete('/deleteQualification',authenticateDoctor,restrict(['doctor']),deleteQualification)
router.delete('/deleteExperience',authenticateDoctor,restrict(['doctor']),deleteExperience)
router.put('/cancelAppointment/:id',authenticateDoctor,restrict(['doctor']),cancelAppointment)

router.get('/get-doctor-rooms/:id',authenticateDoctor,restrict(['doctor']),getDoctorRooms)
router.get('/get-room-messages/:roomId',authenticateDoctor,restrict(['doctor']),getRoomMessages)
router.post('/sendChat/:roomId/:sender/:type',authenticateDoctor,restrict(['doctor']),sendChat)



export default router