import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "@/views/Home";
import Config from "@/views/Config";
import Welcome from "@/views/Welcome";

const Routes = () => {
  return useRoutes(routes);
};

export default Routes;

export const routes = [
  {
    path: "/",
    name: "首页",
    element: <Home />,
  },
  {
    path: "/config",
    name: "配置",
    element: <Config />,
  },
  {
    path: "/welcome",
    hidden: true,
    name: "欢迎",
    element: <Welcome />,
  },
];
