import React, { useState } from "react";
// Style Css
import "../Styles/sginin.css";
import { toast } from "react-toastify";
// React router
import { useNavigate } from "react-router-dom";
// React Redux
import { useDispatch } from "react-redux";
import { useLoginMutation } from "../State/authApiSlice";
import { login } from "../State/authApi";

const Signin = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [loggedInAsAdmin, setLoggedInAsAdmin] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loginUser] = useLoginMutation();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const result = await loginUser({ name, password });
      dispatch(login({ user: result.data, token: result.data }));
      setName("");
      setPassword("");
      console.log(result);
      if (loggedInAsAdmin) {
        navigate("/admin");
      } else {
        navigate("/user");
      }
    } catch (error) {
      toast.error(error?.data?.message || error.error);
      // if (!error.response) {
      //   toast.error("No Server Response");
      // } else if (error.response?.status === 400) {
      //   toast.error("Missing Username or Password");
      // } else if (error.response?.status === 401) {
      //   toast.error("Unauthorized");
      // } else {
      //   toast.error("Login Failed");
      // }
    }
  };
  return (
    <section className="container-login">
      <h2>Sign In </h2>

      {/**form sign in  */}
      <form onSubmit={handleSignIn}>
        {/**user name or email  */}
        <div className="box">
          <label htmlFor="name">User Name</label>
          <input
            id="name"
            type="name"
            placeholder="Enter your Name"
            value={name}
            required
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
            required
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
