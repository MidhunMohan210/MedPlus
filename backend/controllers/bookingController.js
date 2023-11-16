import Doctor from "../models/doctorSchema.js";
import Booking from "../models/bookingSchema.js";
import { format, parse, parseISO } from "date-fns";

export const saveBookingData = async (req, res) => {
  // console.log("Bokking Data", req.body);

  const date = parseISO(req.body.appointmentDate);
  const IndianDate = format(date, "yyyy-MM-dd");
  const paymentId = req.body.paymentId;

  const bookingExist = await Booking.findOne({ paymentId: paymentId });

  try {
    // if (bookingExist) {
    //   res.status(200).json({ data: bookingExist });
    //   return;
    // }

    const newBooking = new Booking({
      doctor: req.body.doctor.details,
      patient: req.body.patient,
      fee: req.body.fee,
      appointmentDate: req.body.appointmentDate,
      indianDate: req.body.appointmentDate,
      slot: req.body.slot,
      indianDate: IndianDate.toString(),
      paymentStatus: req.body.paymentStatus || "pending",
      isPaid: req.body.isPaid || true,
      paymentId: req.body.paymentId,
    });

    const savedBooking = await newBooking.save();

    const doctorId = req.body.doctor.details._id;
    const doctor = await Doctor.findOne({ _id: doctorId });
    console.log("doctorrr",doctor);

    // Find the corresponding slot in the timeSlots array
    const slotIndex = doctor.timeSlots.findIndex((slot) => {
      return (
        slot.indianDate === IndianDate.toString() 
      );
    });

    console.log("slotIndex",slotIndex);

    
    res
      .status(200)
      .json({ message: "Booking saved Succesfully", data: savedBooking });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const cancelBooking = async (req, res) => {
  const bookingId = req.params.id;

  try {
    const cancel = await Booking.findByIdAndUpdate(
      bookingId,
      { $set: { isCancelled: true } },
      { new: true }
    );

    if (!cancel) {
      return res.status(404).json({ message: "Booking not found" });
    }

    res.status(200).json({ status: true, message: "Booking cancelled" });
  } catch (error) {
    res
      .status(500)
      .json({ status: false, message: "Booking cancellation failed" });
  }
};
