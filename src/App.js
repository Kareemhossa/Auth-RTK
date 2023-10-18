import React from "react";
// Style Css
import "./App.css";
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
      <Routes>
        <Route path="/" exact element={<Signin />} />
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="*" element={<PageError />} />
      </Routes>
    </div>
  );
}

export default App;
