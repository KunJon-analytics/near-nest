import Image from "next/image";
import React from "react";

const PropertyCard = () => {
  return (
    <div className="flex w-72 shrink-0 flex-col">
      <Image
        className="h-48 w-full rounded-2xl object-cover object-center"
        src="/images/800x600.png"
        alt="image"
        height={600}
        width={800}
      />

      <div className="card mx-2 -mt-8 grow rounded-2xl p-3.5">
        <div className="flex space-x-2">
          <div className="badge rounded-full bg-info py-1 uppercase text-white">
            plus
          </div>
          <div className="flex flex-wrap items-center font-inter text-xs uppercase">
            <p>3 beds</p>
            <div className="mx-2 my-1 w-px self-stretch bg-slate-200 dark:bg-navy-500"></div>
            <p>3 Adult</p>
          </div>
        </div>
        <div className="mt-2">
          <a
            href="#"
            className="text-sm+ font-medium text-slate-700 line-clamp-1 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
          >
            Emerald Bay Inn.
          </a>
        </div>
        <div className="flex items-end justify-between">
          <p className="mt-2">
            <span className="text-base font-medium text-slate-700 dark:text-navy-100">
              $100
            </span>
            <span className="text-xs text-slate-400 dark:text-navy-300">
              /day
            </span>
          </p>
          <p className="flex shrink-0 items-center space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              stroke="currentColor"
              className="h-3.5 w-3.5 text-slate-400 dark:text-navy-300"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M13.948 4.29l1.643 3.169c.224.44.82.864 1.325.945l2.977.477c1.905.306 2.353 1.639.98 2.953l-2.314 2.233c-.392.378-.607 1.107-.486 1.63l.663 2.763c.523 2.188-.681 3.034-2.688 1.89l-2.791-1.593c-.504-.288-1.335-.288-1.848 0l-2.791 1.594c-1.997 1.143-3.21.288-2.688-1.89l.663-2.765c.12-.522-.094-1.251-.486-1.63l-2.315-2.232c-1.362-1.314-.924-2.647.98-2.953l2.978-.477c.495-.081 1.092-.504 1.316-.945l1.643-3.17c.896-1.719 2.352-1.719 3.239 0z"
              />
            </svg>
            <span>4.9</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
