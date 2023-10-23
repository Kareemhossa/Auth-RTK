import React from "react";
// Style Css
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//React Router
import { Outlet } from "react-router-dom";
// Component
import Nav from "./Componant/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <ToastContainer />
      <Outlet />
    </div>
  );
}

export default App;
