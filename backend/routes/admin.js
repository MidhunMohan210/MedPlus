import express from "express";
import { restrict, authenticateAdmin } from "../auth/verifyAdmin.js";
import { getAllUser,getAllDoctor, blockUser,login ,handleApprove,handleBlock,getBookings,cancelBooking} from "../controllers/adminController.js";
const router = express.Router();

router.get("/getAllUser", getAllUser);
router.post("/login", login);
router.get("/getAllDoctors", getAllDoctor);
router.put("/blockUser/:id", blockUser);
router.put('/HandleApprove/:id',authenticateAdmin,handleApprove)
router.put('/HandleBlock/:id',authenticateAdmin,handleBlock)
router.get('/getBookings',authenticateAdmin,getBookings)
router.put('/cancelBooking/:id',authenticateAdmin,cancelBooking)

export default router;
