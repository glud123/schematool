import React from "react";
import { app, fs, path, dialog } from "@tauri-apps/api";
import Layout from "@/components/Layout";
import Routes, { routes } from "./routes";

const App = () => {
  return (
    <Layout routes={routes}>
      <Routes />
    </Layout>
  );
};

export default App;
