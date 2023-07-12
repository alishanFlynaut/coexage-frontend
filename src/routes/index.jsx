import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/user/login/Login";
import Signup from "../pages/user/signup/Signup";
import Dashboard from "../pages/user/dashboard/Dashboard";
import Home from "../pages/user/home/Home";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
    </Routes>
  );
}
