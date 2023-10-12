import { useContext } from "react";
import BookmarkedEvents from "../Components/Homepage/Cards/BookmarkedEvents";
import { AuthContext } from "../Contexts/AuthProvider";

const BookedEvents = () => {
  const { user } = useContext(AuthContext);
  const locallyStoredData = JSON.parse(localStorage.getItem(user.email));
  return (
    <div className="bg-sky-100 border min-h-[90vh]">
      {locallyStoredData ? (
        <div>
          <h1 className="text-center text-3xl lg:text-5xl my-20">
            Booked <span className="text-sky-500">Events</span>{" "}
          </h1>

          {locallyStoredData.map((localEventData) => (
            <BookmarkedEvents
              key={localEventData.id}
              localEventData={localEventData}
            ></BookmarkedEvents>
          ))}
        </div>
      ) : (
        <div>
          <h1 className="text-center text-3xl px-10 lg:text-5xl mt-36">
            You have not booked any event yet!
          </h1>
        </div>
      )}
    </div>
  );
};

export default BookedEvents;
