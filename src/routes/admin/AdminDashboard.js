import React, { useState } from "react";
import Sidebar from "./Sidebar";

const AdminDashboard = () => {
  return (
    <div className="flex ">
      <Sidebar />
      <section className="flex-1">content left</section>
      <section className="flex-1 w-28">content right</section>
    </div>
  );
};

export default AdminDashboard;
