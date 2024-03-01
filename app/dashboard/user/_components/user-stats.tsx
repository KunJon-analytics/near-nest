import React from "react";

const UserStats = () => {
  return (
    <div className="mt-5 grid grid-cols-1 gap-4 px-4 sm:grid-cols-3 sm:px-5">
      <div className="relative flex flex-col overflow-hidden rounded-lg bg-gradient-to-br from-info to-info-focus p-3.5">
        <p className="text-xs uppercase text-sky-100">Total Booking</p>
        <div className="flex items-end justify-between space-x-2">
          <p className="mt-4 text-2xl font-medium text-white">31,556</p>
          <a
            href="#"
            className="border-b border-dotted border-current pb-0.5 text-xs font-medium text-sky-100 outline-none transition-colors duration-300 line-clamp-1 hover:text-white focus:text-white"
          >
            Get Report
          </a>
        </div>
        <div className="mask is-reuleaux-triangle absolute top-0 right-0 -m-3 h-16 w-16 bg-white/20"></div>
      </div>
      <div className="relative flex flex-col overflow-hidden rounded-lg bg-gradient-to-br from-amber-400 to-orange-600 p-3.5">
        <p className="text-xs uppercase text-amber-50">Points</p>
        <div className="flex items-end justify-between space-x-2">
          <p className="mt-4 text-2xl font-medium text-white">0</p>
          <a
            href="#"
            className="border-b border-dotted border-current pb-0.5 text-xs font-medium text-amber-50 outline-none transition-colors duration-300 line-clamp-1 hover:text-white focus:text-white"
          >
            Get Report
          </a>
        </div>
        <div className="mask is-diamond absolute top-0 right-0 -m-3 h-16 w-16 bg-white/20"></div>
      </div>
      <div className="relative flex flex-col overflow-hidden rounded-lg bg-gradient-to-br from-pink-500 to-rose-500 p-3.5">
        <p className="text-xs uppercase text-pink-100">Pending Reservations</p>
        <div className="flex items-end justify-between space-x-2">
          <p className="mt-4 text-2xl font-medium text-white">2</p>
          <a
            href="#"
            className="border-b border-dotted border-current pb-0.5 text-xs font-medium text-pink-100 outline-none transition-colors duration-300 line-clamp-1 hover:text-white focus:text-white"
          >
            Get Report
          </a>
        </div>
        <div className="mask is-hexagon-2 absolute top-0 right-0 -m-3 h-16 w-16 bg-white/20"></div>
      </div>
    </div>
  );
};

export default UserStats;
