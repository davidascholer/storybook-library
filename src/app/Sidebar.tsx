import { AppSidebar } from "@/components/sidebar/AppSidebar";
import { SidebarContentType } from "@/components/sidebar/utils/types";
import paths from "@/router/paths";
import { Home as HomeIcon, Search, Settings, LogIn } from "lucide-react";
import { Outlet } from "react-router";

// Menu items.
const items: SidebarContentType[] = [
  {
    title: "Home",
    url: `/${paths.home}`,
    icon: HomeIcon,
  },
  {
    title: "Query",
    url: `/${paths.query}`,
    icon: Search,
  },
  {
    title: "Sign In",
    url: `/${paths.auth.root}`,
    icon: LogIn,
  },
  {
    title: "Settings",
    url: `/${paths.settings}`,
    icon: Settings,
  },
];

export default function Sidebar() {

  return (
    <AppSidebar items={items}>
      <Outlet />
    </AppSidebar>
  );
}
