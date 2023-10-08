import { Link } from "react-router-dom";

const Registration = () => {
  const handleRegistration = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const userFirstName = form.get("firstName");
    const userLastName = form.get("lastName");
    const userEmail = form.get("email");
    const userPassword = form.get("password");
    console.log(userFirstName, userLastName, userEmail, userPassword);
  };
  return (
    <div className="hero min-h-screen bg-base-900">
      <div className="hero-content flex-col w-full md:w-1/2 lg:w-2/6 lg:max-w-2xl">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Please Sign Up</h1>
        </div>
        <div className="card w-full py-3 shadow-xl bg-base-100">
          <form onSubmit={handleRegistration} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">First Name</span>
              </label>
              <input
                type="text"
                placeholder="First Name"
                name="firstName"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Last Name</span>
              </label>
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="py-2 rounded-md bg-sky-500 hover:bg-sky-400 hover:text-black text-white font-semibold">
                Sign Up
              </button>
            </div>
          </form>
          <span className="text-center">
            Already have an account? Please{" "}
            <Link to="/login" className="underline text-blue-700">
              Sign in
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Registration;
