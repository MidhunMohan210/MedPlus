/* eslint-disable react/prop-types */
import { formDate } from "../../utils/formDate";

function DoctorAbout({details}) {
  console.log(details);
  return (
    <div>
      <div>
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2 ">
          About Of
          <span className="font-bold text-irisBlueColor text-[24px] leading-9">
            {details?.name}
          </span>
        </h3>
        <p className="text__para">
        {details?.about}
        </p>
      </div>
      <div className="mt-12">
        <h3
          className="text-[20px] leading-[30px] text-headingColor 
        font-semibold   "
        >
          Education
        </h3>

        <ul className="pt-4 md:p-5">
          {
            details.qualifications && details.qualifications.map((el,index)=>(


              <li key={index} className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px] ">
              <div>
                <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                  {formDate(`${el.startDate}`)} -  {formDate(`${el.endDate}`)}
                </span>
                <p className="text-[16px] leading-6 font-medium text-textColor">
               {el.degree}
                </p>
              </div>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                  {el.university}
                </p>
            </li>

            ))
          }

         
          
        </ul>
      </div>
      <div className="mt-12">
      <h3
          className="text-[20px] leading-[30px] text-headingColor 
        font-semibold   "
        >
          Experience
        </h3>
        <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
          {
            details.experiences && details.experiences.map((el,index)=>(

              <li key={index} className="p-4 rounded bg-[#fff9ea]">
            <span className="text-yellowColor text-[15px] leading-6
            font-semibold">
                  {formDate(`${el.startDate}`)} -  {formDate(`${el.endDate}`)}

            </span>
            <p className="text-[16px] leading-6 font-medium text-textColor">
               {el.position}
              </p>
            <p className="text-[16px] leading-6 font-semibold text-textColor">
              {el.hospital}
              </p>
          </li>
        

            ))
          }
          
        </ul>
      </div>
    </div>
  );
}

export default DoctorAbout;
