import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const BookmarkedEvents = ({ localEventData }) => {
  const { id, title, image, price, caption } = localEventData;
  return (
    <div className="bg-sky-100 rounded-sm shadow-xl w-11/12 md:w-4/5 lg:w-3/5 max-w-screen-2xl mx-auto my-10">
      <div className="border-2 rounded-3xl">
        <img className="w-full" src={image} alt="" />
      </div>
      <div className="text-center my-3">
        <h1 className="text-xl text-slate-900 font-semibold">{title}</h1>
        <p className="text-sm text-gray-500 mt-1">{caption}</p>
        <p className="text-sm text-slate-800 mt-2">
          Hire us at the low price of{" "}
          <span className="font-semibold text-base ">{price}</span>
        </p>
      </div>
      <div>
        <Link className="px-3 flex justify-center" to={`/services/${id}`}>
          {" "}
          <button className="w-full my-5 px-5 py-2 bg-sky-500 hover:bg-sky-400 hover:text-black hover:w-[90%] text-white font-semibold rounded-md">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

BookmarkedEvents.propTypes = {
  localEventData: PropTypes.object.isRequired,
};

export default BookmarkedEvents;
