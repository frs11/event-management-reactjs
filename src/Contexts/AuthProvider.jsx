import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [events, setEvents] = useState([]);
  const [newEvents, setNewEvents] = useState([]);

  useEffect(() => {
    fetch("/events.json")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);
  useEffect(() => {
    fetch("/upcomingEvents.json")
      .then((res) => res.json())
      .then((data) => setNewEvents(data));
  }, []);

  const contextData = {
    events,
    newEvents,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
