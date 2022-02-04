import { Link } from "react-router-dom";

import "./Navbar.css";

import Temple from "./../assets/temple.svg";
const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li className="logo">
          <img src={Temple} alt="logo" />
          <span>teamPro</span>
        </li>

        <li>
          <Link to="login">Login</Link>
        </li>

        <li>
          <Link to="signup">Signup</Link>
        </li>
        <li>
          <button className="btn">Logout</button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
