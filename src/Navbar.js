import React from "react";
import "./Navbar.css";
import { GoThreeBars } from "react-icons/go";
import { BsCart3 } from "react-icons/bs";

function Navbar() {
  return (
    <div className="navbar">
      <div className="main-header">
        <GoThreeBars className="main-header-icon" />
        <BsCart3 className="main-header-icon" />
      </div>
    </div>
  );
}

export default Navbar;
