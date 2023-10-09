const Stats = () => {
  return (
    <div className="w-10/12 md:w-11/12 lg:w-4/5 mx-auto my-20">
      <div>
        <h1 className="text-center text-2xl lg:text-4xl font-semibold">
          Our <span className="text-sky-500">Success</span> Stats
        </h1>
      </div>
      <div className="flex justify-center">
        <div className="stats shadow-md my-4 block md:flex lg:flex-row">
          <div className="stat place-items-center">
            <div className="stat-title">Event Organized</div>
            <div className="stat-value text-3xl text-sky-500">474</div>
            <div className="stat-desc mt-3">
              From January 1st to February 1st
            </div>
          </div>

          <div className="stat place-items-center">
            <div className="stat-title">Customer Happiness</div>
            <div className="stat-value text-3xl text-sky-500">99.70%</div>
            <div className="stat-desc mt-3">↗︎ increased by 2%</div>
          </div>

          <div className="stat place-items-center">
            <div className="stat-title">Most Managed Event</div>
            <div className="stat-value text-3xl text-sky-500">
              Birthday Party
            </div>
            <div className="stat-desc mt-3">
              36% of the total managed events!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
