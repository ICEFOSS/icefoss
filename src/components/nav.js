import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { FfscSvg } from "./constants";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex justify-center">
      <nav className=" bg-white hover:bg-slate-600 fixed top-0 z-50 w-[98%] rounded-xl md:mt-3 mt-3 bg-opacity-20 hover:bg-opacity-90 transition-all duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 ">
            <div className="flex-shrink-0">
              <FfscSvg />
            </div>
            <div className="flex items-center">
              <div className="hidden md:block ">
                <div className="-mr-2 w-full flex items-baseline space-x-4 ">
                  <a
                    href="#Landing"
                    className=" text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Dashboard
                  </a>

                  <a
                    href="#About"
                    className="text-white hover:bg-gray-700  px-3 py-2 rounded-md text-sm font-medium"
                  >
                    About
                  </a>

                  <a
                    href="#Speakers"
                    className="text-white hover:bg-gray-700  px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Speakers
                  </a>

                  <a
                    href="#Workshops"
                    className="text-white hover:bg-gray-700  px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Workshops
                  </a>
                </div>

              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-100 bg-opacity-60 text-gray-400  hover:bg-gray-800  inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
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
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="#Landing"
                  className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Dashboard
                </a>

                <a
                  href="#About"
                  className="text-white hover:bg-gray-700  block px-3 py-2 rounded-md text-base font-medium"
                >
                  About
                </a>

                <a
                  href="#Speakers"
                  className="text-white hover:bg-gray-700  block px-3 py-2 rounded-md text-base font-medium"
                >
                  Speakers
                </a>

                <a
                  href="#Workshops"
                  className="text-white hover:bg-gray-700  block px-3 py-2 rounded-md text-base font-medium"
                >
                  Workshops
                </a>

              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Nav;
