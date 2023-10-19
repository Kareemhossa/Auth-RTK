import React from "react";
import "../Styles/userpage.css";
//router
import { Link } from "react-router-dom";

const UserPage = () => {
  const isLoginTrue = JSON.parse(localStorage.getItem("login"));
  return (
    <section className="container-user">
      <h2> welcome </h2>
      {isLoginTrue && isLoginTrue.userLogin ? (
        <p>User Name : {isLoginTrue.userLogin}</p>
      ) : (
        ""
      )}
      <Link to="/" className="btn-signout">
        Sign Out
      </Link>
    </section>
  );
};

export default UserPage;
