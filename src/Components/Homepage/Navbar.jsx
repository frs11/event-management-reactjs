import { useContext, useState } from "react";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const isActiveRoute = useParams();
  const { events } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className="navbar bg-sky-100 w-full lg:max-w-screen-2xl lg:px-16 mx-auto pb-5">
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
            className={` dropdown-content mt-3 p-2 z-[1] ${
              open ? "" : "hidden"
            } shadow bg-base-100 rounded-lg w-52`}
          >
            <span className="block mx-1 my-1 px-2 rounded-md py-1">
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? " text-sky-700 underline rounded-md font-bold"
                    : ""
                }
              >
                Home
              </NavLink>
            </span>
            {events.map((event) => (
              <div
                key={event.id}
                className="block mx-1 my-1 px-2 rounded-md py-1"
              >
                <NavLink
                  to={`/services/${event.id}`}
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-sky-700 underline rounded-md font-bold"
                      : ""
                  }
                >
                  {event.title}
                </NavLink>
              </div>
            ))}
            <span className="block mx-1 my-1 px-2 rounded-md py-1">
              <NavLink
                to="/profile"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? " text-sky-700 underline rounded-md font-bold"
                    : ""
                }
              >
                Profile
              </NavLink>
            </span>
            <span className="block mx-1 my-1 px-2 rounded-md py-1">
              <NavLink
                to="/login"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? " text-sky-700 underline rounded-md font-bold"
                    : ""
                }
              >
                Login
              </NavLink>
            </span>
          </ul>
        </div>
        <Link to="/" className="text-2xl">
          <span className="font-medium font-logoFont">
            Even<span className="text-sky-600">ters</span>
          </span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <span className="flex mx-2 py-1 font-semibold hover:text-sky-600">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? " text-sky-700 underline rounded-md font-bold"
                : ""
            }
          >
            Home
          </NavLink>
        </span>
        <div className="dropdown" onClick={() => setOpen(!open)}>
          <h1
            tabIndex={0}
            className="px-2 py-1 mx-1 hover:text-sky-700 font-semibold"
          >
            <span className={isActiveRoute?.id ? "underline text-sky-700" : ""}>
              Events
            </span>
          </h1>
          <ul
            tabIndex={0}
            className={` dropdown-content mt-3 p-2 z-[1] ${
              open ? "" : "hidden"
            } shadow bg-base-100 rounded-lg w-52`}
          >
            {events.map((event) => (
              <div key={event.id} className="flex mx-2 py-1">
                <NavLink
                  to={`/services/${event.id}`}
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? " text-sky-700 underline rounded-md font-bold"
                      : ""
                  }
                >
                  {event.title}
                </NavLink>
              </div>
            ))}
          </ul>
        </div>

        <span className="flex mx-2 py-1 font-semibold hover:text-sky-600">
          <NavLink
            to="/profile"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? " text-sky-700 underline rounded-md font-bold"
                : ""
            }
          >
            Profile
          </NavLink>
        </span>
        <span className="flex mx-2 py-1 font-semibold hover:text-sky-600">
          <NavLink
            to="/login"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? " text-sky-700 underline rounded-md font-bold"
                : ""
            }
          >
            login
          </NavLink>
        </span>
      </div>
      <div className="navbar-end">
        <img
          className="w-6 lg:w-12 mr-3"
          src="https://i.ibb.co/By0YFNn/default-profile-picture-grey-male-icon.png"
          alt=""
        />
        <button
          onClick={handleLogin}
          className="px-5 py-2 bg-sky-500 text-white rounded-md"
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Navbar;
