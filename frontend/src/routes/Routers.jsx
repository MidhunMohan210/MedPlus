import Home from '../pages/Home'
import Services from '../pages/Services'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Contact from '../pages/Contact'
import Doctors from '../pages/Doctors/Doctor'
import Otp from '../pages/Otp'
import DoctorDetails from '../pages/Doctors/DoctorDetails'
import DoctorSignup from '../pages/Doctors/DoctorSignup'
import DoctorOtp from '../pages/Doctors/DoctorOtp'
import MyAccount from '../Dashboard/userAccount/MyAccount'
import DoctorAccount from '../Dashboard/doctorAccount/DoctorAccount'
import ProtectedRoute from './ProtectedRoutes'
import ProtectedDoctorRoute from './ProtectedDoctorRoute'
import {Route,Routes} from "react-router-dom"
import AdminLogin from '../pages/Admin/adminLogin'
import AdminHome from '../pages/Admin/AdminHome'
import AdminUsers from '../pages/Admin/AdminUsers'
import AdminDoctors from '../pages/Admin/AdminDoctors'
import AdminBookings from '../pages/Admin/AdminBookings'
import PaymentSuccess from '../components/PaymentSuccess/PaymentSuccess'
import Error404 from '../components/404Error/Error404'
import PaymentFailed from '../components/PaymentFailed/PaymentFailed'
import Appointments from '../pages/Doctors/Appointments'


const Routers = () => {
  return (
   <Routes>
    <Route path='users/home' element={<Home />} />
    <Route path='/users' element={<Home />} />
      <Route path='/users/doctors' element={<Doctors />} />
      <Route path='/doctors/:id' element={<DoctorDetails />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Signup />} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/services' element={<Services />} />
      <Route path='/otp' element={<Otp/>} />
      <Route path='/doctorOtp' element={<DoctorOtp/>} />
      <Route path='/doctorSignup' element={<DoctorSignup/>} />
      <Route path='/userProfile' element={ <ProtectedRoute allowedTypes={["patient"]} ><MyAccount/></ProtectedRoute>} />
      <Route path='/users/doctorDetails/:id' element={<DoctorDetails/>} />
      <Route path='/users/paymentSuccess' element={<PaymentSuccess/>} />
      <Route path='/users/paymentFailed' element={<PaymentFailed/>} />


      <Route path='doctors/home' element={<Home />} />
      <Route path='/doctors/doctors' element={<Doctors />} />
      <Route path='/doctors/doctorDetails/:id' element={<DoctorDetails/>} />

      <Route path='/doctors/doctorProfile' element={<ProtectedDoctorRoute  allowedTypes={["doctor"]} ><DoctorAccount/></ProtectedDoctorRoute>} />
      <Route path='/doctors/appointments' element={<ProtectedDoctorRoute  allowedTypes={["doctor"]} ><Appointments/></ProtectedDoctorRoute>} />


{/* ADMINNNNNN */}
     
      
      <Route path='/admin/adminLogin' element={<AdminLogin/>}/>
      <Route path='/admin/home' element={<AdminHome/>}/>
      <Route path='/admin/users' element={<AdminUsers/>}/>
      <Route path='/admin/doctors' element={<AdminDoctors/>}/>
      <Route path='/admin/bookings' element={<AdminBookings/>}/>
      <Route path='*' element={<Error404/>}/>


   </Routes>
  
  )
}

export default Routers
  