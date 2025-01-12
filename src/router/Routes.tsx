import { Routes as AppRoutes, Route } from "react-router";
import Home from "@/app/Home";
import QueryList from "@/app/QueryList";
import SignUp from "@/app/auth/SignUp";
import SignIn from "@/app/auth/SignIn";
import SignOut from "@/app/auth/SignOut";
import ForgotPassword from "@/app/auth/ForgotPassword";
import NotFound from "@/app/NotFound";
import AuthLayout from "@/app/auth/AuthLayout";
import Sidebar from "@/app/Sidebar";
import Settings from "@/app/Settings";
import paths from "./paths";
import QueryDetail from "@/app/QueryDetail";

function Routes() {
  return (
    <AppRoutes>
      <Route element={<Sidebar />}>
        <Route index element={<Home />} />
        
        <Route path={paths.query}>
          <Route index element={<QueryList />} />
          <Route path=":pokemonName" element={<QueryDetail />} />
        </Route>

        <Route path={paths.settings} element={<Settings />} />
        <Route path={paths.auth.root}>
          <Route element={<AuthLayout />}>
            <Route index element={<SignIn />} />
            <Route path={paths.auth.signOut} element={<SignOut />} />
            <Route path={paths.auth.signUp} element={<SignUp />} />
            <Route
              path={paths.auth.forgotPassword}
              element={<ForgotPassword />}
            />
          </Route>
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </AppRoutes>
  );
}

export default Routes;
