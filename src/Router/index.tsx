import * as React from "react";
import {
  Routes,
  Route,
} from "react-router-dom";
import Login from "../Pages/Login";
import Home from "../Pages/Home";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/app" element={<Home />} />
    </Routes>
  )
}

export default Router