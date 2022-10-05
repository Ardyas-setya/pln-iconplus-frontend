import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLogin from "./routes/admin/AdminLogin";
import Homepage from "./routes/Homepage/Homepage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin/login" element={<AdminLogin />}></Route>
        <Route path="/" element={<Homepage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
