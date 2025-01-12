import React from "react";
import { Outlet } from "react-router";

const AuthLayout: React.FC = () => {
  return (
    <div>
      <h1>Auth Stuff</h1>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
