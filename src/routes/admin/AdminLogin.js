import React from "react";
import { Link } from "react-router-dom";
import imagesLib from "../../utils/images";

export default function AdminLogin() {
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <div className="justify-center flex">
          <img src={imagesLib.logoIconnect} alt="logo" className="w-40" />
        </div>
        <h1 className="text-xl my-5 font-semibold text-center font-inter">
          Login as an warehouse admin
        </h1>
        <form className="mt-6">
          <div className="mb-2">
            <label
              for="email"
              className="block text-sm font-interBold text-gray-800"
            >
              Email
            </label>
            <input
              type="email"
              className="block font-inter  w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              for="password"
              className="block text-sm  font-interBold text-gray-800"
            >
              Password
            </label>
            <input
              type="password"
              className="block w-full font-inter px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <Link to="/" className="text-xs text-purple-600 hover:underline">
            Forget Password?
          </Link>
          <div className="mt-6">
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors  duration-200 transform bg-[#0096A7] rounded-md hover:bg-cyan-800 focus:outline-none focus:bg-cyan-600">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
