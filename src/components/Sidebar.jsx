//styles
import "./Sidebar.css";

import React from "react";
import DashboardIcon from "../assets/dashboard_icon.svg";
import AddIcon from "../assets/add_icon.svg";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <div className="sidebar">
        <div className="sidebar-content">
          <div className="user">
            {/* profile picture and display name */}
            <p>hello, username</p>
          </div>
          <nav className="links">
            <ul>
              <li>
                <NavLink to="/">
                  <img src={DashboardIcon} alt="dashboard-icon" />
                  <span>Dashboard</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/create">
                  <img src={AddIcon} alt="add-icon" />
                  <span>Add Project</span>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
