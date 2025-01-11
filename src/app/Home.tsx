import { Button } from "@/components/ui/button/Button";
import { Label } from "@/components/ui/label";
import { AppSidebar } from "@/components/ui/sidebar/AppSidebar";
import { SidebarContentType } from "@/components/ui/sidebar/utils/types";
import { useTheme } from "@/theme/hooks/useTheme";
import { Calendar, Home as HomeIcon, Search, Settings, HelpCircle, LogIn } from "lucide-react";

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

export default function Home() {
  // Set the theme to dark mode.
  const { theme, changeTheme } = useTheme();

  return (
    <AppSidebar items={items}>
      <div>
        <Button
          onClick={() => changeTheme(theme == "light" ? "dark" : "light")}
        >
          Change Theme
        </Button>
        <Label>{theme}</Label>
      </div>
    </AppSidebar>
  );
}
