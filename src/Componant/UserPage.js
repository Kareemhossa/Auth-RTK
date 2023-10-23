import React from "react";
// Style Css
import "../Styles/userpage.css";
// Router Dom
import { Link } from "react-router-dom";
// React Redux
import { useSelector } from "react-redux";

const UserPage = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <section className="container-user">
      <h2>Welcome </h2>
      {user ? <p>User Name: {user.name}</p> : ""}
      <Link to="/" className="btn-signout">
        Sign Out
      </Link>
    </section>
  );
};

export default UserPage;
