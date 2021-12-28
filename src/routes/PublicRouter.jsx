import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginScreen from "../pages/LoginScreen";
import RegisterScreen from "../pages/RegisterScreen";

const PublicRouter = () => {
  return (
    <Routes>
      <Route index path="login" element={<LoginScreen />} />
      <Route path="register" element={<RegisterScreen />} />
    </Routes>
  );
};

export default PublicRouter;
