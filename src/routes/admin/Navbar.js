import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import Logo from "../../assets/images/logos/logo.png";
import { BsGear, BsFolder } from "react-icons/bs";
import { TbReportAnalytics } from "react-icons/tb";
import { RiDashboardLine } from "react-icons/ri";
import { IoMdContacts } from "react-icons/io";
import { NavLink } from "react-router-dom";

const links = [
  {
    title: "Dashboard",
    data: [{ nav: "admin/dashboard", icon: <RiDashboardLine /> }],
  },
  {
    title: "Manajemen Akun",
    data: [{ nav: "admin/akun", icon: <BsGear /> }],
  },
  {
    title: "Mitra",
    data: [{ nav: "admin/mitra", icon: <IoMdContacts /> }],
  },
];

const activeLink =
  "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-black  text-md m-2";
const normalLink =
  "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md hover:text-white hover:bg-blueIconBasic active:bg-sky-700 focus:outline-none focus:ring focus:ring-sky-300 m-2";

export default function Navbar({ fixed }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img className="h-8" src={Logo} alt="Icon+" />
              </div>
              {links.map((item) => (
                <div className="hidden md:block">
                  {item.data.map((data) => (
                    <div className="ml-10 flex items-baseline space-x-3">
                      <NavLink
                        to={data.nav}
                        className=" hover:bg-slate-100 text-navy px-3 py-2 rounded-md text-sm font-medium flex-row flex items-center space-x-2"
                      >
                        <div>{data.icon}</div>
                        <div>{item.title}</div>
                      </NavLink>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-200 inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2  focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only"></span>
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
            <div>
              {links.map((item) => (
                <div className="md:hidden" id="mobile-menu">
                  <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <a
                      href={item.nav}
                      className=" hover:bg-slate-100 text-navy px-3 py-2 rounded-md text-sm font-medium flex-row flex items-center space-x-2"
                    >
                      <div>{item.icon}</div>
                      <div>{item.title}</div>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}
