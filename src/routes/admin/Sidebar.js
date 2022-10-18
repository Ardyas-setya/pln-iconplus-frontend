import { React, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import {
  AiOutlineCalendar,
  AiOutlineShoppingCart,
  AiOutlineAreaChart,
  AiOutlineBarChart,
  AiOutlineStock,
} from "react-icons/ai";
import { FiShoppingBag, FiEdit, FiPieChart } from "react-icons/fi";
import { BsKanban, BsBarChart } from "react-icons/bs";
import { BiColorFill } from "react-icons/bi";
import { IoMdContacts } from "react-icons/io";
import { RiContactsLine, RiStockLine } from "react-icons/ri";
import { GiLouvrePyramid } from "react-icons/gi";

import Logo from "../../assets/images/logos/logo.png";
import { BsGear, BsFolder } from "react-icons/bs";
import { TbReportAnalytics } from "react-icons/tb";

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

const links = [
  {
    title: "Admin",
    links: [
      {
        name: "Manajemen akun",
        nav: "admin/dashboard",
        icon: <BsGear />,
      },
      {
        name: "Mitra",
        nav: "admin/mitra",
        icon: <IoMdContacts />,
      },
    ],
  },

  {
    title: "Inventori",
    links: [
      {
        name: "Traffic barang",
        nav: "admin/barang",
        icon: <BsFolder />,
      },
      {
        name: "-",
        nav: "admin/-",
        icon: <IoMdContacts />,
      },
    ],
  },
  {
    title: "BAST",
    links: [
      {
        name: "List BAST",
        nav: "admin/bast",
        icon: <TbReportAnalytics />,
      },
    ],
  },
];

const Sidebar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="flex items-center justify-between border-b border-gray-400 ">
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2 m-4"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 left-52 p-3"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <Widebar />
          </div>
        </section>

        <div className="DESKTOP-MENU hidden space-x-8 lg:flex">
          <Widebar />
        </div>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%; 
        height: 100vh;
        top: 0;
        left: 0;
        background: none;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: left;
      }
    `}</style>
    </div>
  );
};

const Widebar = () => {
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState("#03C9D7");
  // const [currentMode, setCurrentMode] = useState("Light");
  // const [themeSettings, setThemeSettings] = useState(false);
  const [activeMenu, setActiveMenu] = useState(true);
  // const [isClicked, setIsClicked] = useState(initialState);

  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md  hover:bg-sky-600 active:bg-sky-700 focus:outline-none focus:ring focus:ring-sky-300 m-2";

  return (
    <div className="h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 bg-sky-100 w-64 px-2">
      {activeMenu && (
        <>
          <div className="flex items-center self-center justify-content-center">
            <Link
              to="/"
              onClick={handleCloseSideBar}
              className="self-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight text-slate-900"
            >
              <img
                src={Logo}
                alt="icon+ logo"
                className="w-28 self-center "
              ></img>
            </Link>
          </div>
          <div className="mt-10 ">
            {links.map((item) => (
              <div key={item.title}>
                <p className="text-black-400 font-medium text-xs m-3 mt-4 uppercase">
                  {item.title}
                </p>
                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.nav}`}
                    key={link.name}
                    onClick={handleCloseSideBar}
                    style={({ isActive }) => ({
                      backgroundColor: isActive ? currentColor : "",
                    })}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    {link.icon}
                    <span className="capitalize ">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
