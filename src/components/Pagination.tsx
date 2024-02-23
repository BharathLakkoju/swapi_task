import React, { useState } from "react";
import { Link } from "react-router-dom";
import { pageNumbers } from "../assets/PageNumbers";
import PlanetList from "./PlanetList";
import Navbar from "./Navbar";

const Pagination: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center w-full h-full pt-20">
        <div className="Page navigation example">
          <div className="inline-flex -space-x-px text-sm">
            <Link
              aria-disabled={currentPage === 1}
              to={`/page=${Math.max(currentPage - 1, 1)}`}
            >
              <button
                className={
                  currentPage === 1
                    ? "flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-blue-400 dark:hover:bg-blue-700 dark:hover:text-white cursor-not-allowed"
                    : "flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-blue-400 dark:hover:bg-blue-700 dark:hover:text-white"
                }
                onClick={() => {
                  if (currentPage <= 1) {
                    setCurrentPage(1);
                  } else {
                    setCurrentPage(currentPage - 1);
                  }
                }}
                aria-disabled={currentPage === 1}
              >
                <svg
                  className="w-2.5 h-2.5 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 1 1 5l4 4"
                  />
                </svg>
              </button>
            </Link>
            {pageNumbers.map((item) => (
              <Link to={item.to} key={item.id}>
                <button
                  className={
                    currentPage === item.id
                      ? "flex items-center justify-center px-4 h-10 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                      : "flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-800 hover:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  }
                  onClick={() => {
                    setCurrentPage(item.id);
                  }}
                >
                  {item.text}
                </button>
              </Link>
            ))}
            <Link to={`/page=${Math.min(currentPage + 1, 6)}`}>
              <button
                className={
                  currentPage === 6
                    ? "flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-not-allowed"
                    : "flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-blue-400 dark:hover:bg-blue-700 dark:hover:text-white"
                }
                onClick={() => {
                  if (currentPage >= 6) {
                    setCurrentPage(6);
                  } else {
                    setCurrentPage(currentPage + 1);
                  }
                }}
              >
                <svg
                  className="w-2.5 h-2.5 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <PlanetList pageNumber={currentPage} />
    </>
  );
};

export default Pagination;
