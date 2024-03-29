import React from "react";

const Navbar: React.FC = () => {
  return (
    <>
      <nav className="fixed top-0 z-30 w-full bg-white bg-opacity-50 border-b-2 border-gray-200 dark:bg-gray-900 start-0 dark:border-gray-600 dark:bg-opacity-50 dark:backdrop-blur">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              SWAPI
            </span>
          </div>
          <div className="flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg md:p-0 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:border-gray-700">
              <li>
                <a
                  href="https://swapi.dev/"
                  className="block px-3 py-2 text-white rounded md:text-blue-700 md:p-0 md:dark:text-blue-500"
                  aria-current="page"
                >
                  SWAPI-Home
                </a>
              </li>
              <li>
                <a
                  href="https://swapi.dev/about"
                  className="block px-3 py-2 text-gray-900 rounded md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:text-white dark:border-gray-700"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="https://swapi.dev/documentation"
                  className="block px-3 py-2 text-gray-900 rounded md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:text-white dark:border-gray-700"
                >
                  Documentation
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
