import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import routers from "./router";

document.body.innerHTML = '<div id="app"></div>';
const root = createRoot(document.getElementById("app"));

const router = createBrowserRouter(routers);

root.render(<RouterProvider router={router} />);

