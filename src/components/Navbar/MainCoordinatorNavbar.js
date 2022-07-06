import React, { useEffect, useRef, useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isInsOpen, setisInsOpen] = useState(false);
  const [isInsMobOpen, setisInsMobOpen] = useState(false);
  const [isDisOpen, setisDisOpen] = useState(false);
  const [isDisMobOpen, setisDisMobOpen] = useState(false);
  const [isRegnoOpen, setIsRegnoOpen] = useState(false);

  const regRef = useRef();
  const subRef = useRef();
  const regMobRef = useRef();
  const subMobRef = useRef();
  const regnoRef = useRef();

  useEffect(() => {
    const closeDropdown = (e) => {
      console.log(e);

      if (e.path[0] !== regRef.current) {
        setisInsOpen(false);
      }

      if (e.path[0] !== regnoRef.current) {
        setIsRegnoOpen(false);
      }

      if (e.path[0] !== subRef.current) {
        setisDisOpen(false);
      }

      if (e.path[0] !== regMobRef.current) {
        setisInsMobOpen(false);
      }

      if (e.path[0] !== subMobRef.current) {
        setisDisMobOpen(false);
      }
    };

    document.body.addEventListener("click", closeDropdown);
    return () => document.body.removeEventListener("click", closeDropdown);
  }, []);

  return (
    <div>
      <nav className="bg-white-800 nav-col">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center justify-between h-16 w-full ">
            <div className="w-1/8">
              <button
                ref={regnoRef}
                style={{ position: "relative" }}
                class="text-white px-3 py-2 rounded-md text-sm font-medium inline-flex"
                onClick={() => setIsRegnoOpen(!isRegnoOpen)}
              >
                20BIT0106
                <svg
                  class="w-4 h-4 ml-2 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>

              <Transition show={isRegnoOpen}>
                <div
                  id="regno_ddl"
                  style={{
                    position: "absolute",
                    background: "#0083CA",
                    top: "60px",
                  }}
                  className={
                    "z-10 divide-y divide-gray-100 rounded w-28 dark:bg-gray-700"
                  }
                >
                  <Link
                    to="/"
                    class="block text-white px-3 py-2 rounded-md text-sm font-semibold"
                  >
                    Log out
                  </Link>
                </div>
              </Transition>
            </div>

            <div className="flex justify-between w-full">
              {/* <div className="flex-shrink-0"></div> */}
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4 m-auto mr-32">
                  <Link
                    to="/resetPassword"
                    className="text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Reset Password
                  </Link>

                  <div>
                    <button
                      ref={regRef}
                      style={{ position: "relative" }}
                      class="text-white px-3 py-2 rounded-md text-sm font-medium inline-flex"
                      onClick={() => setisInsOpen(!isInsOpen)}
                    >
                      Insert
                      <svg
                        class="w-4 h-4 ml-2 mt-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    </button>

                    <Transition show={isInsOpen}>
                      <div
                        id="reg_ddl"
                        style={{
                          position: "absolute",
                          background: "#0083CA",
                          top: "60px",
                        }}
                        className={
                          "z-10 divide-y divide-gray-100 rounded w-28 dark:bg-gray-700"
                        }
                      >
                        <ul class="py-1 text-sm text-gray-700 dark:text-gray-200">
                          <li>
                            <Link
                              to="/insertFaculty"
                              class="block text-white px-3 py-2 rounded-md text-sm font-semibold"
                            >
                              Faculty
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/assignSubcordinator"
                              class="block text-white px-3 py-2 rounded-md text-sm font-semibold"
                            >
                              Subcoordinator
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </Transition>
                  </div>

                  <div>
                    <button
                      ref={subRef}
                      style={{ position: "relative" }}
                      class="text-white px-3 py-2 rounded-md text-sm font-medium inline-flex"
                      onClick={() => setisDisOpen(!isDisOpen)}
                    >
                      Display
                      <svg
                        class="w-4 h-4 ml-2 mt-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    </button>

                    <Transition show={isDisOpen}>
                      <div
                        id="sub_ddl"
                        style={{
                          position: "absolute",
                          background: "#0083CA",
                          top: "60px",
                        }}
                        className={
                          "z-10 divide-y divide-gray-100 rounded w-28 dark:bg-gray-700 closed"
                        }
                      >
                        <ul class="py-1 text-sm text-gray-700 dark:text-gray-200">
                          <li>
                            <Link
                              to="/displayFaculty"
                              class="block text-white px-3 py-2 rounded-md text-sm font-semibold"
                            >
                              Faculty
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/displayCourse"
                              class="block text-white px-3 py-2 rounded-md text-sm font-semibold"
                            >
                              Course
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </Transition>
                  </div>

                  <Link
                  to="/projectAllocation"
                  className=" text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Project Allocation
                </Link>

                <Link
                  to="/updateFaculty"
                  className=" text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Update Faculty
                </Link>

                </div>
              </div>
              <div className="navbar-brand flex justify-between ">
                <div className="">
                  <Link to="/" className="">
                    Capstone Project Portal
                  </Link>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
              >
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
                  to="/updateFaculty"
                  className=" text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Update Faculty
                </Link>

                <div>
                  <button
                    ref={subMobRef}
                    class="text-white px-3 py-2 rounded-md text-sm font-medium inline-flex"
                    onClick={() => setisDisMobOpen(!isDisMobOpen)}
                  >
                    Display
                    <svg
                      class="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </button>

                  <Transition show={isDisMobOpen}>
                    <div
                      id="sub_mob_ddl"
                      className={"z-10 divide-y divide-gray-100 rounded w-28 "}
                    >
                      <ul class="py-1 text-sm text-gray-700 dark:text-gray-200">
                        <li>
                          <Link
                            to="/displayFaculty"
                            class="block text-white px-3 py-2 rounded-md text-sm font-medium"
                          >
                            Faculty
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/displayCourse"
                            class="block text-white px-3 py-2 rounded-md text-sm font-medium"
                          >
                            Courses
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </Transition>
                </div>

                <div>
                  <button
                    ref={regMobRef}
                    class="text-white px-3 py-2 rounded-md text-sm font-medium inline-flex"
                    onClick={() => setisInsMobOpen(!isInsMobOpen)}
                  >
                    Insert
                    <svg
                      class="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </button>
                  <Transition show={isInsMobOpen}>
                    <div
                      id="reg_mob_ddl"
                      className={"z-10 divide-y divide-gray-100 rounded w-28 "}
                    >
                      <ul class="py-1 text-sm text-gray-700 dark:text-gray-200">
                        <li>
                          <Link
                            to="/insertFaculty"
                            class="block text-white px-3 py-2 rounded-md text-sm font-medium"
                          >
                            Faculty
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/assignSubcordinator"
                            class="block text-white px-3 py-2 rounded-md text-sm font-medium"
                          >
                            Subcoordinator
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </Transition>
                </div>

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
