import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import logo from "../../../Public/MotherTongue.svg";
import "./header.css";

export default function Header() {
  return (
    <>
        <header className="header">
            <img src={logo} alt="" />
            <nav>
                <NavLink to="/auth/language">Learn Languages</NavLink>
                <NavLink to="/auth/about">About Us</NavLink>
                <NavLink to="/login">Logout</NavLink>
            </nav>
        </header>
        <Outlet />
    </>
  );
}