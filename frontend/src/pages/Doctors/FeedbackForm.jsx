import { useState } from "react";
import { AiFillStar } from "react-icons/ai";

function FeedbackForm() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [reviewText, setReviewText] = useState("");


  const handleSubmitReview=async (e)=>{
    e.preventDefault();
  }
 

  const handleStarHover = (starIndex) => {
    setHover(starIndex);
  };

  const handleStarClick = (starIndex) => {
    setRating(starIndex);
  };

  return (
    <form action="">
      <div>
        <h3 className="text-headingColor text-[16px] leading-4 font-semibold mb-4">
          How would you rate your overall experience
        </h3>
        <div>
          {[...Array(5).keys()].map((index) => {
            const starIndex = index + 1;
            return (
              <button
                key={starIndex}
                className={`${
                  starIndex <= (rating || hover)
                    ? "text-yellowColor"
                    : "text-gray-400"
                } bg-transparent border-none outline-none text-[22px] cursor-pointer`}
                type="button"
                onClick={() => handleStarClick(starIndex)}
                onMouseEnter={() => handleStarHover(starIndex)}
                onMouseLeave={() => handleStarHover(0)}
                onDoubleClick={() => {
                  setHover(0);
                  setRating(0);
                }}
              >
                <AiFillStar />
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-[30px]">
        <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4 mt-0">
          Share your feedback and suggestions*
        </h3>
        <textarea
          className="border border-solid border-[#0066ff34] focus:outline outline-primaryColor w-full
        px-4 py-3 rounded-md 
        "
          onChange={(e) => setReviewText(e.target.value)}
          placeholder="write your message"
        >
          
        </textarea>
      </div>

      <button type="submit"
      onClick={handleSubmitReview} className="btn" >
        Submit Feedback
      </button>

    </form>
  );
}

export default FeedbackForm;
