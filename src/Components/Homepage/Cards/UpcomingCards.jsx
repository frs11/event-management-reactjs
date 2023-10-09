import { useContext } from "react";
import { AuthContext } from "../../../Contexts/AuthProvider";
import UpcomingCard from "./UpcomingCard";

const UpcomingCards = () => {
  const { newEvents } = useContext(AuthContext);
  return (
    <div className="w-10/12 mx-auto my-10 py-5">
      <h1 className="text-2xl lg:text-4xl mb-10 text-center font-semibold">
        {" "}
        Our <span className="text-sky-500">Upcoming </span> new Services
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-7">
        {newEvents.map((event2) => (
          <UpcomingCard key={event2.id} event2={event2}></UpcomingCard>
        ))}
      </div>
    </div>
  );
};

export default UpcomingCards;
