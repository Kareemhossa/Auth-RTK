import React from "react";
import "../Styles/userpage.css";
//router
import { Link } from "react-router-dom";

const UserPage = () => {
  return (
    <section className="container-user">
      <h2> welcome </h2>
      <p>User Name : </p>
      <Link to="/" className="btn-signout">
        Sign Out
      </Link>
    </section>
  );
};

export default UserPage;
