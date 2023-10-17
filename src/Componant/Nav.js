import React from "react";
// Style Css
import "../Styles/nav.module.css";

const Nav = () => {
  return (
    <nav className="nav">
      <h1>Bright Vision</h1>
      <ul>
        <li>
          <a href="/"> Login </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
