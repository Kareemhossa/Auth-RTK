import React from "react";
import { Link } from "react-router-dom";
import "../Styles/pagerro.css";

const PageError = () => {
  return (
    <main>
      <h2>Page not found</h2>
      <p>Sorry, we couldn’t find the page you’re looking for.</p>
      <Link to="/" className="btn-back">
        Go back home
      </Link>
    </main>
  );
};

export default PageError;
