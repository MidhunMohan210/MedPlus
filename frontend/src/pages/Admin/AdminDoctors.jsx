import { useState, useEffect } from "react";
import fetchDoctors from "../../hooks/useFetchData";
import { toast } from "react-toastify";
import { BASE_URL, adminToken } from "../../config";
// import CertificateModal from "../../components/modals/CertificateModal";
const path = "http://localhost:7000/doctorMedia/";

const AdminDoctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [certificate, setCertificate] = useState("");

  const modalHandler = (certificate) => {
    setOpenModal(true);
    setCertificate(certificate);
  };

  const handleApprove = async (docId) => {
    try {
      const res = await fetch(`${BASE_URL}/admin/HandleApprove/${docId}`, {
        method: "put",
        headers: {
          Authorization: `Bearer ${adminToken}`,
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


  ///handle blockkkk/////

  const handleBlock = async (docId) => {
    try {
      const res = await fetch(`${BASE_URL}/admin/HandleBlock/${docId}`, {
        method: "put",
        headers: {
          Authorization: `Bearer ${adminToken}`,
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




  const { data, error, loading, refetch } = fetchDoctors(
    `${BASE_URL}/admin/getAllDoctors`
  );

  useEffect(() => {
    if (error) {
      console.log(error);
    } else if (!error && !loading) {
      setDoctors(data);
    }
  }, [error, loading, data]);
  console.log(doctors);

  return (
    <div>
      <section className="container">
        <div className="relative mx-5 overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-[#9cedf8]">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Sl.No
                </th>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>

                <th scope="col" className="px-6 py-3">
                  Specialization
                </th>

                <th scope="col" className="px-6 py-3">
                  Certificate
                </th>
                <th scope="col" className="px-6 py-3">
                  Approve
                </th>
                <th scope="col" className="px-6 py-3">
                  Options
                </th>
              </tr>
            </thead>
            <tbody className="border-2">
              {doctors.length > 0 ? (
                doctors.map((doctor, index) => (
                  <tr
                    className="bg-white border-b hover:bg-gray-100 "
                    key={index}
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                      {index + 1}
                    </th>
                    <td className="px-6 py-4">{doctor.name}</td>
                    <td className="px-6 py-4">{doctor.email}</td>
                    <td className="px-6 py-4">{doctor.specialization}</td>
                    <td className="px-6 py-4">
                      <a
                        onClick={() => modalHandler(doctor.certificate)}
                        className="flex justify-center hover:text-blue-700 hover:font-medium cursor-pointer"
                      >
                        view
                      </a>
                    </td>

                    {doctor.isApproved == false ? (
                      <td className="px-6 py-4 text-center">
                        <button
                          onClick={() => handleApprove(doctor._id)}
                          className="px-4 py-2 font-semibold text-green-700 bg-green-100 border border-green-500 rounded-2xl hover:bg-green-500 hover:text-white hover:border-transparent"
                        >
                          Approve
                        </button>
                      </td>
                    ) : (
                      <td className="px-6 py-4 text-center">
                        <button
                          onClick={() => handleApprove(doctor._id)}
                          className="px-4 py-2 font-semibold text-green-700 bg-green-100 border border-green-500 rounded-2xl hover:bg-green-500 hover:text-white hover:border-transparent"
                        >
                          Reject
                        </button>
                      </td>
                    )}

                    {doctor.isBlocked ? (
                      <td className="px-6 py-4">
                        <button 
                        onClick={()=>handleBlock(doctor._id)}
                        className="px-4 py-2 font-semibold text-yellow-700 bg-yellow-100 border border-yellow-500 rounded hover:bg-yellow-500 hover:text-white hover:border-transparent">
                          Unblock
                        </button>
                      </td>
                    ) : (
                      <td className="px-6 py-4">
                        <button 
                        onClick={()=>handleBlock(doctor._id)}

                        className="px-4 py-2 font-semibold text-red-700 bg-red-100 border border-red-500 rounded hover:bg-red-500 hover:text-white hover:border-transparent">
                          Block
                        </button>
                      </td>
                    )}
                  </tr>
                ))
              ) : (
                <tr className="bg-white border-b hover:bg-gray-200">
                  <td
                    colSpan={8}
                    className="px-6 py-4 font-medium text-center text-gray-900"
                  >
                    No Doctors Found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
      {openModal && (
        <div className=" w-[400px] h-[350px] p-4 fixed inset-0 mx-auto my-auto    bg-gray-300 drop-shadow-2xl ">
          <div>
            <img src={`${path}${certificate}`} alt="" />
          </div>
          <div>
            <button
              onClick={() => setOpenModal(false)}
              className="bg-red-500 p-2 rounded-md mt-2 text-white "
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDoctors;
