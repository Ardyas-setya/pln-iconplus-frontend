import { React, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoMdContacts } from "react-icons/io";
import Logo from "../../assets/images/logos/logo.png";
import { BsGear, BsFolder } from "react-icons/bs";
import { TbReportAnalytics } from "react-icons/tb";
import { RiDashboardLine } from "react-icons/ri";

const links = [
  {
    title: "",
    links: [
      {
        name: "Dashboard",
        nav: "admin/dashboard",
        icon: <RiDashboardLine />,
      },
    ],
  },
  {
    title: "Admin",
    links: [
      {
        name: "Manajemen akun",
        nav: "admin/akun",
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
  return (
    <div className=" items-center justify-between border-r border-gray-200 shadow-md ">
      <Widebar />
    </div>
  );
};

const Widebar = () => {
  const [currentColor, setCurrentColor] = useState("#d1d5db");

  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-black  text-md m-2";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md hover:text-white hover:bg-blueIconBasic active:bg-sky-700 focus:outline-none focus:ring focus:ring-sky-300 m-2";

  return (
    <div className="h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 bg-white w-56 px-2 ">
      <div className="flex items-center self-center justify-content-center">
        <Link
          to="/"
          className="self-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight text-slate-900"
        >
          <img src={Logo} alt="icon+ logo" className="w-28 self-center  "></img>
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
    </div>
  );
};

export default Sidebar;
