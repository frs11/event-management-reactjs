import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { events } = useContext(AuthContext);

  const links = (
    <>
      {events.map((event) => (
        <NavLink
          to={`/services/${event.id}`}
          key={event.id}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "underline mx-2 text-red-500 font-bold"
              : ""
          }
        >
          {event.title}
        </NavLink>
      ))}
    </>
  );
  return (
    <div className="navbar bg-base-100 w-full lg:max-w-screen-2xl lg:px-16 mx-auto my-5">
      <div className="navbar-start">
        <div className="dropdown" onClick={() => setOpen(!open)}>
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            // className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            className={` dropdown-content mt-3 p-2 z-[1] ${
              open ? "" : "hidden"
            } shadow bg-base-100 rounded-lg w-52`}
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Eventers</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <img
          className="w-6 lg:w-12 mr-3"
          src="https://i.ibb.co/By0YFNn/default-profile-picture-grey-male-icon.png"
          alt=""
        />
        <button className="px-5 py-2 bg-sky-600 text-white rounded-md">
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Navbar;
