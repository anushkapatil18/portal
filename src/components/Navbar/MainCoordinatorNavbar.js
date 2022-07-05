import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="bg-white-800 nav-col">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-row-reverse items-center justify-between h-16">
            <div className="navbar-brand">Capstone Project Portal</div>
            <div className="flex items-center">
              <div className="flex-shrink-0"></div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link
                    to="/resetPassword"
                    className="text-white px-3 py-2 rounded-md text-sm font-medium"
                  > 
                    Reset Password
                  </Link>
                  <Link
                    to="/displayCourse"
                    className="text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Display  Course
                  </Link>
                  <Link
                    to="/updateFaculty"
                    className="text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Update/Delete Faculty
                  </Link>
                  <Link
                    to="/displayFaculty"
                    className=" text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Display Faculty 
                  </Link>
                  <Link
                    to="/insertFaculty"
                    className=" text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Insert Faculty
                  </Link>
                  <Link
                    to="/projectAllocation"
                    className=" text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Project Allocation
                  </Link>
                 
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                <svg
                  className="fill-current h-3 w-3"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
              </button>

            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                    to="/projectAllocation"
                    className=" text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Project Allocation
                  </Link>
              <Link
                    to="/insertFaculty"
                    className=" text-white block px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Insert Faculty 
                  </Link>

                  <Link
                    to="/displayFaculty"
                    className=" text-white block px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Display Faculty 
                  </Link>

                  <Link
                    to="/updateFaculty"
                    className="text-white block px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Update/Delete Faculty
                  </Link>

                  <Link
                    to="/displayCourse"
                    className="text-white block px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Display Courses
                  </Link>

                  <Link
                    to="/"
                    className="text-white block px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Circulars
                  </Link>
                  <Link
                    to="/resetPassword"
                    className="text-white block px-3 py-2 rounded-md text-sm font-medium"
                  > 
                    Reset Password
                  </Link>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Navbar;