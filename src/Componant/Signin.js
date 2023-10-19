import React, { useState, useEffect } from "react";
// import axios from "axios";
// Style Css
import "../Styles/sginin.css";
import { toast } from "react-toastify";
// React router
import { useNavigate } from "react-router-dom";
// React Redux
import { useSelector, useDispatch } from "react-redux";
import { useLoginMutation } from "../State/userApiSlice";
import { setCredentials } from "../State/authSlice";

const Signin = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [loggedInAsAdmin, setLoggedInAsAdmin] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login] = useLoginMutation();
  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo == null) {
      navigate("/");
    }
  }, [userInfo, navigate]);

  //handelSignin with username +password
  // const handleSignIn = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post("http://localhost:5000/auth", {
  //       username: name,
  //       password: password,
  //     });
  //     localStorage.setItem(
  //       "login",
  //       JSON.stringify({
  //         userLogin: true,
  //         token: response.data.access_token,
  //       })
  //     );
  //     console.log("response", response);
  //     console.log(response.access_token);
  //     setError("");
  //     setName("");
  //     setPassword("");
  //     if (loggedInAsAdmin) {
  //       navigate("/admin");
  //     } else {
  //       navigate("/user");
  //     }
  //   } catch (error) {
  //     if (error.code === "username") {
  //       setError("Name is not defind.");
  //     } else {
  //       setError("Error signing in. Please check your credentials.");
  //     }
  //   }
  // };
  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const userData = await login({ name, password }).unwrap();
      dispatch(setCredentials({ ...userData }));
      setName("");
      setPassword("");
      console.log(userData);
      if (loggedInAsAdmin) {
        navigate("/admin");
      } else {
        navigate("/user");
      }
    } catch (errer) {
      toast.error(errer?.data?.message || errer.error);
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
