import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout";
import Card from "./component/Card";
import Signup from "./component/Signup";
import Update from "./component/Update";
import View from "./component/View";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Card />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/update/:id" element={<Update />} />
      <Route path="/view/:id" element={<View />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
