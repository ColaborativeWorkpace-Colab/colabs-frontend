import React, { useState, useEffect, useRef } from "react";
import { Transition } from "@headlessui/react";
import logo from "../../../../assets/images/logo.png";
import { navLinks } from "./navItems";
import { Link } from "react-router-dom";
import user from "../../../../assets/images/profile.jpg";
import { MdNotifications } from "react-icons/md";

function ClientHeader({ selectedNav }) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();
  return (
    <div>
      <nav className="fixed top-0 left-0 w-full bg-white z-20  md:px-[50px] ">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between md:justify-between h-16">
            <div className="flex md:gap-[80px] gap-6 justify-around items-center align-center">
              <Link to="/client">
                <img
                  className="w-[40px] h-[40px] md:h-[50px] sm:w-[50px]"
                  src={logo}
                  alt="Workflow"
                />
              </Link>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {navLinks.map((value, key) => (
                    <div key={key}>
                      <div>{value.item}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className=""></div>
            <div className="flex gap-x-6">
              <span className="cursor-pointer">
                <MdNotifications color="purple" size={25} />
              </span>
              <span className="cursor-pointer">
                <img className="h-[25px] w-[25px]" src={user} alt="icon" />
              </span>
            </div>

            <div className="mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-purple-700 inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-purple-800 focus:ring-purple"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
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
          {() => (
            <div className="bg-white md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="/"
                  className="text-gray-600 hover:bg-purple-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Home
                </a>
                <a
                  href="/jobs"
                  className="text-gray-600 hover:bg-purple-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Jobs
                </a>

                <a
                  href="/messaging"
                  className="text-gray-600 hover:bg-purple-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Messaging
                </a>

                <a
                  href="/notification"
                  className="text-gray-600 hover:bg-purple-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Notofication
                </a>

                <a
                  href="/workspace"
                  className="text-gray-600 hover:bg-purple-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Workspace
                </a>
                <a
                  href="/profile"
                  className="text-gray-600 hover:bg-purple-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Profile
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default ClientHeader;
