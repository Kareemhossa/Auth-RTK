import React from "react";
// Style Css
import "./App.css";
//React Router
import { Routes, Route } from "react-router-dom";
// Component
import Signin from "./Componant/Signin";
import Nav from "./Componant/Nav";
import AdminPage from "./Componant/AdminPage";
import UserPage from "./Componant/UserPage";
import PageError from "./Componant/PageError";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="*" element={<PageError />} />
      </Routes>
    </div>
  );
}

export default App;
