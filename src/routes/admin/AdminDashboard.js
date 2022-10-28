import React, { useState } from "react";
import { MdPassword } from "react-icons/md";
import { SiJenkins } from "react-icons/si";
import Sidebar from "./Sidebar";

const AdminDashboard = () => {
  return (
    <div className="flex flex-row w-full space-x-8 p-6 h-full">
      <div className="grow  h-full ">
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          </div>
        </header>
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
