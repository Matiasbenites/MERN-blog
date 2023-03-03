import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./Components/Layout";
import IndexPage from "./Pages/IndexPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path={"/login"} element={<div>Login</div>} />
      </Route>
    </Routes>
  );
}

export default App;
