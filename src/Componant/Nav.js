import React from "react";
// Style Css
import "../Styles/nav.module.css";
//Router
import { Link, useNavigate } from "react-router-dom";
// Redux
import { useSelector, useDispatch } from "react-redux";
import { useLogoutMutation } from "../State/authApiSlice";
import { logout } from "../State/authApi";

const Nav = () => {
  const user = useSelector((state) => state.auth.user);
  const [logoutData] = useLogoutMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const LogoutHandle = async () => {
    try {
      await logoutData();
      dispatch(logout());
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <nav className="nav">
      <h1>Hello Dude</h1>
      <ul>
        {user ? (
          <li>
            <Link onClick={LogoutHandle} to="/">
              Logout
            </Link>
          </li>
        ) : null}
      </ul>
    </nav>
  );
};

export default Nav;
