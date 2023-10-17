import React from "react";
// Style Css
import "../Styles/sginin.css";

const Signin = () => {
  // const [email, setEmail] = useState(""); , { useState }
  // const [password, setPassword] = useState("");

  //handelsubmit with username +password
  const handelSubmitSignIn = async (e) => {
    e.preventDefault();
    console.log("form");
  };

  return (
    <div className="container-login">
      <div>
        <h2>Sign In </h2>

        <form onSubmit={handelSubmitSignIn}>
          {/**user name or email  */}
          <div className="box">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              autoComplete="email"
            />
          </div>
          {/**password  */}
          <div className="box">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              autoComplete="current-password"
            />
          </div>
          <button onClick={handelSubmitSignIn} type="submit">
            Sign In
          </button>
        </form>

        {/**check labal  */}
        <label className="checkbox-label">
          <input
            type="checkbox"
            id="admin-checkbox"
            className="custom-checkbox"
          />
          <span>Logged in as Admin</span>
        </label>
      </div>
    </div>
  );
};

export default Signin;
