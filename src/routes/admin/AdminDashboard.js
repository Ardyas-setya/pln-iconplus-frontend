import React, { useState } from "react";
import { MdPassword } from "react-icons/md";
import { SiJenkins } from "react-icons/si";
import Sidebar from "./Sidebar";

const AdminDashboard = () => {
  return (
    <div className="flex flex-row w-full space-x-8 p-6 h-full">
      <div className="grow  h-full ">
        <h1 className="font-bold text-black">Dashboard</h1>
        <div></div>
      </div>
      <div className="space-y-6">
        <div className="flex-none card w-72 bg-white shadow-xl h-full ">
          <div className="card-body flex-row space-x-3 h-72"></div>
        </div>
        <div className="grow card w-72 bg-white shadow-xl ">
          <div className="card-body flex-row space-x-3 "></div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
