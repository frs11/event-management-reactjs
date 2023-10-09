import { useContext } from "react";
import { AuthContext } from "../../../Contexts/AuthProvider";
import Card from "./Card";

const Cards = () => {
  const { events } = useContext(AuthContext);
  return (
    <div className="w-10/12 mx-auto my-10 py-5">
      <h1 className="text-2xl lg:text-4xl mb-10 text-center font-semibold">
        {" "}
        The <span className="text-sky-500">Services </span> we provide
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-7">
        {events.map((event) => (
          <Card key={event.id} event={event}></Card>
        ))}
      </div>
    </div>
  );
};

export default Cards;
