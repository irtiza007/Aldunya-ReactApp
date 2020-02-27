import React from "react";
import { Assets } from "../config/Asset-Config";
import NavItem from "./NavItem";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-light navbar-horizontal  navbar-expand-lg shadow">
        <div className="container">
          <div className="avatar-img">
            <img src={Assets.logo} alt="logo" />
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <NavItem to="/" name="Clients" />
              <NavItem to="/excercise" name="Excercise" />
              <li>
                <div className="d-flex justify-content-center align-items-center ">
                  <div className="avatar-img">
                    <img
                      src={Assets.userAvatar}
                      alt="avatar"
                      className="img-circle"
                    />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
