// import SidebarHeader from "./components/SidebarHeader"
// import SidebarFooter from "./components/SidebarFooter"
import Sidebar from "./components/Sidebar";
import SidebarContent from "./components/SidebarContent";
import SidebarGroup from "./components/SidebarGroup";
import SidebarGroupLabel from "./components/SidebarGroupLabel";
import SidebarGroupContent from "./components/SidebarGroupContent";
import SidebarMenuItem from "./components/SidebarMenuItem";
import SidebarMenuButton from "./components/SidebarMenuButton";
import SidebarMenu from "./components/SidebarMenu";
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";
import SidebarProvider from "./SidebarProvider";
import SidebarTrigger from "./SidebarTrigger";

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
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

export default function AppSidebar({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div>
      <SidebarProvider>
        <Sidebar side="left" variant="sidebar" collapsible="offcanvas">
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Application</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <a href={item.url}>
                          <item.icon />
                          <span>{item.title}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
        <main>
          <SidebarTrigger />
          {children}
        </main>
      </SidebarProvider>
    </div>
  );
}
