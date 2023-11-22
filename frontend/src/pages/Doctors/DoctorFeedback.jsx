import { useState } from "react";
import avatar from "../../assets/images/avatar-icon.png";
import { formDate } from "../../utils/formDate.js";
import { AiFillStar } from "react-icons/ai";
import FeedbackForm from "./FeedbackForm";

function DoctorFeedback({details}) {

  const [showFeedBack, setShowFeedBack] = useState(false);
  return (
    <div>
      <div className="mt-[50px]">
        <h4 className="text-[20px] leading-[30px] font-bold text-headingColor mb-[30px] ">
          All reviews (272)
        </h4>
        <div className="flex justify-start gap-10 mb-[30px]">
          <div className="flex gap-3">
            <figure className="w-10 h-10 rounded-full ">
              <img className="w-full" src={avatar} alt="" />
            </figure>
            <div>
              <h5 className="text-[16px] leading-6 text-primaryColor font-bold  ">
                Binu Benny
              </h5>
              <p className="text-[14px] leading-6 text-textColor  ">
                {formDate("02-11-2023")}
              </p>
              <p className="mt-3 font-medium text__para text-[15px]">
                Good Service,Highly Recommended 👌
              </p>
            </div>
          </div>

          <div className="flex gap-1">
            {[...Array(5).keys()].map((_, index) => (
              <AiFillStar key={index} color="#0067ff" />
            ))}
          </div>
        </div>
      </div>
     {
      !showFeedBack && (
        <div className="text-center">
        <button onClick={() => setShowFeedBack(true)} className="btn">
          Give Feedback
        </button>
      </div>
      )
     }

      {
        showFeedBack && <FeedbackForm  details={details} />
      }     
      
    </div>
  );
}

export default DoctorFeedback;
