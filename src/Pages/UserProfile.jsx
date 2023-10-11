import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthProvider";

const UserProfile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="bg-sky-100 border">
      <div className="w-full lg:w-10/12 mx-auto my-10">
        <h1 className="text-4xl text-center">
          User <span className="text-sky-500">Profile</span>
        </h1>
        <div className=" w-2/3 mx-auto rounded-lg">
          <div className="flex justify-center mt-10">
            <img
              className="w-56 rounded-full border-2 border-sky-500"
              src={
                user?.photoURL
                  ? user.photoURL
                  : "https://source.unsplash.com/random/200x200/?img=1"
              }
              alt="user profile pic"
            />
          </div>
          <div className="mx-auto w-full lg:w-4/5 bg-white p-5 rounded-md shadow mt-10">
            <h1 className="text-lg font-semibold">
              Name:{" "}
              <span className="text-gray-500">
                {user?.displayName ? user.displayName : "Unavailable"}
              </span>
            </h1>
            <h1 className="text-lg font-semibold mt-2">
              User ID:{" "}
              <span className="text-gray-500 text-base">
                {user?.uid ? user.uid : "Unavailable"}
              </span>
            </h1>
            <h1 className="text-lg font-semibold mt-2">
              Email:{" "}
              <span className="text-gray-500">
                {user?.email ? user.email : "Unavailable"}
              </span>
            </h1>
            <h1 className="text-lg font-semibold mt-2">
              Phone Number:{" "}
              <span className="text-gray-500">
                {user?.phoneNumber ? user.phoneNumber : "017XXXXXXXX"}
              </span>
            </h1>
            <h1 className="text-lg font-semibold mt-2">
              Email Verification:{" "}
              <span className="text-gray-500">
                {user?.emailVerified ? user.emailVerified : "Not verified yet"}
              </span>
            </h1>
            <h1 className="text-lg font-semibold mt-2">
              Profile Creation Date:{" "}
              <span className="text-gray-500 text-base">
                {user?.metadata?.creationTime
                  ? user.metadata?.creationTime
                  : "Unknown"}
              </span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
