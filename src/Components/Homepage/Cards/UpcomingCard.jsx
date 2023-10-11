import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos";

const UpcomingCard = ({ event2 }) => {
  const { title, image, caption, price, description } = event2;
  const [descriptionLength, setDescriptionLength] = useState(102);

  const handleReadMe = () => {
    setDescriptionLength(description.length);
  };
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      offset: 150,
    });
    AOS.init({
      startEvent: "onReveal",
    });
    AOS.refresh();

    return AOS.refreshHard();
  }, []);

  return (
    <div data-aos="zoom-in" className="bg-sky-100 rounded-sm shadow-xl">
      <div className="border-2 rounded-3xl">
        <img className="h-[230px] w-full" src={image} alt="" />
      </div>
      <div className="text-center my-3">
        <h1 className="text-xl text-slate-900 font-semibold">{title}</h1>
        <p className="text-sm text-gray-500 mt-1">{caption}</p>
        <p className="text-sm text-slate-800 mt-2">
          Estimated booking price{" "}
          <span className="font-semibold text-base ">{price}</span>
        </p>
      </div>
      <div className="px-3 flex justify-center">
        <p className="w-full my-5 text-center px-5 py-2 text-black font-semibold rounded-md">
          {description.length > descriptionLength
            ? description.slice(0, 102)
            : description}
          <span
            onClick={handleReadMe}
            className={
              descriptionLength == description.length
                ? "hidden"
                : "text-blue-600 cursor-pointer hover:text-blue-700"
            }
          >
            ...read more
          </span>
        </p>
      </div>
    </div>
  );
};

UpcomingCard.propTypes = {
  event2: PropTypes.object.isRequired,
};

export default UpcomingCard;
