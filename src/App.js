import React, { Fragment, Switch } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminDashboard from "./routes/admin/AdminDashboard";
import AdminLogin from "./routes/admin/AdminLogin";
import Employee from "./routes/admin/Employee";
import Mitra from "./routes/admin/Mitra";
import Navbar from "./routes/admin/Navbar";
import Sidebar from "./routes/admin/Sidebar";
import Homepage from "./routes/Homepage/Homepage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin/login" element={<AdminLogin />}></Route>
      </Routes>
      <Fragment>
        <div className="flex flex-row bg-sky-50">
          <Sidebar />
          <div className="w-full">
            {/* <Navbar /> */}
            <Routes>
              <Route
                path="/admin/dashboard"
                element={<AdminDashboard />}
              ></Route>
              <Route path="/admin/akun" element={<Employee />}></Route>
              <Route path="/admin/mitra" element={<Mitra />}></Route>
              <Route path="/" element={<Homepage />}></Route>
            </Routes>
          </div>
        </div>
      </Fragment>
    </Router>
  );
}

export default App;
