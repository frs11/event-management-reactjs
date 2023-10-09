import { useLoaderData, useParams } from "react-router-dom";

const CardDetails = () => {
  const eventID = useParams();
  const events = useLoaderData();

  const selectedEvent = events.find((event) => event.id == eventID.id);
  const { title, image, price, booking, caption, description } = selectedEvent;

  return (
    <div className="w-10/12 lg:max-w-screen-2xl mx-auto my-14 lg:my-24">
      <h1 className="text-5xl font-semibold text-center mt-20 mb-12">
        Event <span className="text-sky-500">Information</span>
      </h1>
      <div className="bg-sky-200">
        <div>
          <img src={image} className="w-full" alt="" />
        </div>
        <div className="w-11/12 mx-auto">
          <h1 className="text-4xl font-semibold my-5">{title}</h1>
          <p className="text-lg text-gray-700">{caption}</p>
          <p className="text-base text-gray-700">
            {" "}
            <span className="font-semibold text-sky-600">Booking: </span>{" "}
            {booking}
          </p>
          <p className="text-base font-semibold text-gray-700">
            <span className=" text-sky-600">Booking Price: </span>
            {price}
          </p>
          <p className="text-sm">
            {" "}
            <span className="font-semibold text-sky-600">Description: </span>
            {description}
          </p>
          <button className="my-5 px-5 py-2 bg-sky-500 hover:bg-sky-300 hover:text-black text-white font-semibold rounded-md">
            Book This Event
          </button>
        </div>
      </div>{" "}
    </div>
  );
};

export default CardDetails;
