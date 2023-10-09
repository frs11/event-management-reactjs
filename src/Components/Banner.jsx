const Banner = () => {
  return (
    <div>
      <div className="headerbg w-full h-[400px] lg:h-[600px] flex justify-center items-center">
        <div className="text-center">
          <h1 className="text-3xl text-white lg:text-6xl font-semibold">
            <span>
              Let us <span className="text-sky-500">help</span> you <br />{" "}
              Create more <span className="text-sky-500">Memories</span>
            </span>
          </h1>
          <div>
            <p className="text-gray-300 text-xs lg:text-sm mx-auto mt-8 w-72 lg:w-96">
              Planning an event takes lots of hardwork and time. It’s simple.
              You have an event to plan and we have the solutions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
