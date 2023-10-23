import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// Router Dom
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
// React Redux
import { Provider } from "react-redux";
import { store } from "./State/store";
// Component
import Signin from "./Componant/Signin";
import UserPage from "./Componant/UserPage";
import PageError from "./Componant/PageError";
import Dashboard from "./Componant/Dashbord";
import PrivateRoute from "./Componant/PrivateRoute";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<Signin />} />
      <Route path="" element={<PrivateRoute />}>
        <Route path="/user" element={<UserPage />} />
        <Route path="/admin" element={<Dashboard />} />
      </Route>
      <Route path="*" element={<PageError />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

// <React.StrictMode> avide to rander twise
