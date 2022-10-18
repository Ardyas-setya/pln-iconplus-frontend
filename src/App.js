import React, { Fragment, Switch } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminDashboard from "./routes/admin/AdminDashboard";
import AdminLogin from "./routes/admin/AdminLogin";
import Sidebar from "./routes/admin/Sidebar";
import Homepage from "./routes/Homepage/Homepage";
function App() {
  return (
    <Router>
      <Fragment>
        <Sidebar />
        <div className="container">
          <Routes>
            <Route path="/admin/login" element={<AdminLogin />}></Route>
            <Route path="/admin/dashboard" element={<AdminDashboard />}></Route>
            <Route path="/" element={<Homepage />}></Route>
          </Routes>
        </div>
      </Fragment>
    </Router>
  );
}

export default App;
