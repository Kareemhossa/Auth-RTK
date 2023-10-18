import React, { useState } from "react";
// Style Css
import "../Styles/sginin.css";
// React router
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [loggedInAsAdmin, setLoggedInAsAdmin] = useState(false);
  const navigate = useNavigate();

  //handelsubmit with username +password
  const handelSubmitSignIn = async (e) => {
    e.preventDefault();
    // console.log({ name, password });
    setName("");
    setPassword("");
    if (loggedInAsAdmin) {
      navigate("/admin");
    } else {
      navigate("/user");
    }
  };

  return (
    <section className="container-login">
      <h2>Sign In </h2>
      {/**form sign in  */}
      <form onSubmit={handelSubmitSignIn}>
        {/**user name or email  */}
        <div className="box">
          <label htmlFor="name">User Name</label>
          <input
            id="username"
            type="username"
            placeholder="Enter your Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        {/**password  */}
        <div className="box">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            autoComplete="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button type="submit">Sign In</button>
      </form>
      {/**check labal  */}
      <label className="checkbox-label">
        <input
          type="checkbox"
          id="admin-checkbox"
          className="custom-checkbox"
          checked={loggedInAsAdmin}
          onChange={(e) => setLoggedInAsAdmin(e.target.checked)}
        />
        <span>Logged in as Admin</span>
      </label>
    </section>
  );
};

export default Signin;
