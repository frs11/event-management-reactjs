import PropTypes from "prop-types";

const Card = ({ event }) => {
  return (
    <div className="bg-sky-100 rounded-sm shadow-xl">
      <div className="border-2 rounded-3xl">
        <img className="h-[230px] w-full" src={event.image} alt="" />
      </div>
      <div className="text-center my-3">
        <h1 className="text-xl text-slate-900 font-semibold">{event.title}</h1>
        <p className="text-sm text-gray-500 mt-1">{event.caption}</p>
        <p className="text-sm text-slate-800 mt-2">
          Hire us at the low price of{" "}
          <span className="font-semibold text-base ">{event.price}</span>
        </p>
      </div>
      <div className="px-3 flex justify-center">
        <button className="w-full my-5 px-5 py-2 bg-sky-500 hover:bg-sky-400 hover:text-black hover:w-[90%] text-white font-semibold rounded-md">
          View Details
        </button>
      </div>
    </div>
  );
};

Card.propTypes = {
  event: PropTypes.object.isRequired,
};

export default Card;
