import { Routes as AppRoutes, Route } from "react-router";
import Home from "@/app/Home";
import About from "@/app/About";
import SignUp from "@/app/auth/SignUp";
import SignIn from "@/app/auth/SignIn";
import SignOut from "@/app/auth/SignOut";
import ForgotPassword from "@/app/auth/ForgotPassword";
import AuthLayout from "@/app/auth/AuthLayout";

function Routes() {
  return (
    <AppRoutes>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />

      <Route path="auth">
        {/* <Route index element={<SignIn />} /> */}
        <Route element={<AuthLayout />}>
          <Route path=":sign-in" element={<SignIn />} />
          <Route path=":sign-out" element={<SignOut />} />
          <Route path=":sign-up" element={<SignUp />} />
        </Route>
        <Route path="forgot-password" element={<ForgotPassword />} />
      </Route>

      {/* 
      <Route path="auth">
        <Route index element={<SignIn />} />
        <Route path=":sign-out" element={<SignOut />} />
        <Route path=":sign-up" element={<SignUp />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
      </Route> */}
    </AppRoutes>
  );
}

export default Routes;
