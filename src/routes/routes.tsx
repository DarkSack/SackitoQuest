import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../Views/Home";

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};
export default Router