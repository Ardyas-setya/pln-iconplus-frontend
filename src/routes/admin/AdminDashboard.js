import React, { useState } from "react";
import { MdPassword } from "react-icons/md";
import { SiJenkins } from "react-icons/si";
import Sidebar from "./Sidebar";

const AdminDashboard = () => {
  return (
    <div className="flex flex-col space-y-4 p-5">
      <h1 className="font-bold text-black">Manajemen Akun</h1>
      {/* infografis atas */}
      <div className="flex flex-row space-x-6">
        <div className="card w-72 bg-white shadow-xl">
          <div className="card-body flex-row space-x-3">
            <div className="flex w-auto items-center ">
              <h1 className="text-4xl font-bold text-black ">200</h1>
            </div>

            <div className="flex flex-col">
              <h2 className="card-title text-black">Barang Masuk</h2>
              <p>hari ini</p>
            </div>
          </div>
        </div>
        <div className="card w-72 bg-white shadow-xl">
          <div className="card-body flex-row space-x-3">
            <div className="flex w-auto items-center ">
              <h1 className="text-4xl font-bold text-black ">200</h1>
            </div>

            <div className="flex flex-col">
              <h2 className="card-title text-black">Barang Masuk</h2>
              <p>hari ini</p>
            </div>
          </div>
        </div>
        <div className="card w-72 bg-white shadow-xl">
          <div className="card-body flex-row space-x-3">
            <div className="flex w-auto items-center ">
              <h1 className="text-4xl font-bold text-black ">200</h1>
            </div>

            <div className="flex flex-col">
              <h2 className="card-title text-black">Barang Masuk</h2>
              <p>hari ini</p>
            </div>
          </div>
        </div>
      </div>
      <div className="card w-72 bg-white shadow-xl">
        <div className="card-body flex-row space-x-3"></div>
      </div>
    </div>
  );
};

export default AdminDashboard;
