import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos";
import { useEffect } from "react";

const Card = ({ event }) => {
  useEffect(() => {
    AOS.init({
      duration: 700,
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
        <img className="h-[230px] w-full" src={event.image} alt="" />
      </div>
      <div className="text-center my-3">
        <h1 className="text-xl text-slate-900 font-semibold">{event.title}</h1>
        <p className="text-sm text-gray-500 mt-1">{event.caption}</p>
        <p className="text-sm text-slate-800 mt-2">
          Event cost{" "}
          <span className="font-semibold text-base ">{event.price}</span>
        </p>
      </div>
      <div>
        <Link className="px-3 flex justify-center" to={`/services/${event.id}`}>
          {" "}
          <button className="w-full my-5 px-5 py-2 bg-sky-500 hover:bg-sky-400 hover:text-black hover:w-[90%] text-white font-semibold rounded-md">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

Card.propTypes = {
  event: PropTypes.object.isRequired,
};

export default Card;
