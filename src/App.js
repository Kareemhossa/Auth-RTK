import React from "react";
// Style Css
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//React Router
import { Routes, Route } from "react-router-dom";
// Component
import Signin from "./Componant/Signin";
import Nav from "./Componant/Nav";
import UserPage from "./Componant/UserPage";
import PageError from "./Componant/PageError";
import Dashboard from "./Componant/Dashbord";

function App() {
  return (
    <div className="App">
      <Nav />
      <ToastContainer />
      <Routes>
        {/* public routes */}
        <Route path="/" exact element={<Signin />} />
        {/* Protect routes */}
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/user" element={<UserPage />} />
        {/* catch routes */}
        <Route path="*" element={<PageError />} />
      </Routes>
    </div>
  );
}

export default App;
