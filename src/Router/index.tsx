import * as React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from "../Pages/Login";
import Home from "../Pages/Home";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/app" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router