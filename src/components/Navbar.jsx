import { Link } from "react-router-dom";
import { useLogout } from "./../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
// stylesheet
import "./Navbar.css";

//icons
import Temple from "./../assets/temple.svg";

const Navbar = () => {
  const { isPending, logout } = useLogout();
  const { user } = useAuthContext();

  return (
    <div className="navbar">
      <ul>
        <li className="logo">
          <img src={Temple} alt="logo" />
          <span>teamPro</span>
        </li>
        {!user && (
          <>
            <li>
              <Link to="login">Login</Link>
            </li>

            <li>
              <Link to="signup">Signup</Link>
            </li>
          </>
        )}

        {user && (
          <li>
            {!isPending && (
              <button className="btn" onClick={logout}>
                Logout
              </button>
            )}
            {isPending && (
              <button className="btn" disabled>
                Logging Out
              </button>
            )}
          </li>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
