import { Routes as AppRoutes, Route } from "react-router";
import Home from "@/app/Home";
import Query from "@/app/Query";
import SignUp from "@/app/auth/SignUp";
import SignIn from "@/app/auth/SignIn";
import SignOut from "@/app/auth/SignOut";
import ForgotPassword from "@/app/auth/ForgotPassword";
import NotFound from "@/app/NotFound";
import AuthLayout from "@/app/auth/AuthLayout";
import Sidebar from "@/app/Sidebar";
import Settings from "@/app/Settings";

function Routes() {
  return (
    <AppRoutes>
      <Route element={<Sidebar />}>
        <Route index element={<Home />} />
        <Route path="query" element={<Query />} />
        <Route path="settings" element={<Settings />} />
        <Route path="auth">
          <Route element={<AuthLayout />}>
            <Route index element={<SignIn />} />
            <Route path="sign-out" element={<SignOut />} />
            <Route path="sign-up" element={<SignUp />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
          </Route>
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </AppRoutes>
  );
}

export default Routes;
