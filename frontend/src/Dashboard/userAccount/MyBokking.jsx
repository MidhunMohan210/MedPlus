import { BASE_URL, token } from "../../config";
import DoctorsCard from "../../pages/Doctors/DoctorsCard";
import Loader from "../../components/Loader/Loader";
import Error from "../../components/About/Error";
import useFetchData from "../../hooks/useFetchData";
import starIcon from "../../assets/images/Star.png";
import { Link } from "react-router-dom";
const path = "http://localhost:7000/doctorMedia/";

function MyBokking() {
  const {
    data: appointments,
    loading,
    error,
    refetch,
    // Function to trigger data fetching
  } = useFetchData(`${BASE_URL}/users/getMyAppointments`);

  console.log(appointments);
  const handleCancel = async (id) => {
    try {
      const res = await fetch(`${BASE_URL}/users/cancelBooking/${id}`, {
        method: "put",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      let result = res.json();

      if (!res.ok) {
        throw new Error(result.message);
      }
      refetch();
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 mt-8 w-[750px] ">
      {appointments.map((el) => (
        <div
          key={el._id}
          className={`p-3 m-8 transition-transform transform rounded-md shadow-lg lg:p-0 hover:scale-105 sm:m-4 lg:m-0 ${
            el.isCancelled ? "opacity-50 pointer-events-none" : ""
          }`}
        >
          <div>
            <img
              src={`${path}${el.doctor.photo}`}
              alt=""
              className="w-full  "
            />
          </div>
          <h3 className="text-[18px] leading-[30px] lg:text-[20px]  text-headingColor font-[700] mt-3   p-2   ">
            Dr. {el.doctor.name}
          </h3>

          <div className="flex items-center justify-between gap-3  p-2">
            <span className="bg-[#CCF0F3] text-irisBlueColor py-1 px-2 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[12px] lg:leading-7 font-semibold rounded">
              {el.doctor.specialization}
            </span>
            <div className="flex items-center justify-end ">
              <span className="flex items-center gap-[1px] text-[12px] leading-6 lg:text-[15px] lg:leading-7 font-semibold text-headingColor">
                <img src={starIcon} className="w-5" alt="" />
                4.3
              </span>
              <span className="text-[10px] ml-7 leading-6 lg:text-[12px] lg:leading-7 font-[400] text-headingColor">
                (282)
              </span>
            </div>

            <div className="mt-[18px] lg:mt-5 flex items-center justify-between "></div>
          </div>
          <div className="flex justify-around">
            <h3 className="text-[10px] mt-0 leading-7 lg:text-[13px]  font-semibold text-headingColor p-2  ">
              {el.indianDate}
            </h3>
            <h3 className="text-[10px] mt-0 leading-7 lg:text-[13px]  font-semibold text-headingColor p-2 ">
              {el.slot}
            </h3>
          </div>
          <div>
            <button
              onClick={() => handleCancel(el._id)}
              className="bg-gray-500 hover:bg-red-500 w-full leading-9 text-white"
            >
              Cancel
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MyBokking;
