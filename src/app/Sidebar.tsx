import { AppSidebar } from "@/components/ui/sidebar/AppSidebar";
import { SidebarContentType } from "@/components/ui/sidebar/utils/types";
import { Calendar, Home as HomeIcon, Search, Settings, HelpCircle, LogIn } from "lucide-react";
import { Outlet } from "react-router";

// Menu items.
const items: SidebarContentType[] = [
  {
    title: "Home",
    url: "/",
    icon: HomeIcon,
  },
  {
    title: "About",
    url: "/about",
    icon: HelpCircle,
  },
  {
    title: "Sign In",
    url: "/auth",
    icon: LogIn,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
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
