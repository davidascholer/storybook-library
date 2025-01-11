import type { Meta, StoryObj } from "@storybook/react";
import { AppSidebar } from "./AppSidebar";
import { ComponentProps } from "react";
import { Calendar, Home as HomeIcon, Inbox, Search, Settings } from "lucide-react";
import { SidebarContentType } from "./utils/types";

// Menu items.
const items: SidebarContentType[] = [
  {
    title: "Home",
    url: "#",
    icon: HomeIcon,
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
type StoryProps = ComponentProps<typeof AppSidebar>;

const meta = {
  title: "Components/AppSidebar",
  component: AppSidebar,
  parameters: {
    // Optional parameter to center the component in the Canvas.
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    side: {
        options: ["left", "right"],
        control: { type: "select" },
      },
    variant: {
        options: ["sidebar", "floating", "inset"],
        control: { type: "select" },
      },
    collapsible: {
        options: ["offcanvas", "icon", "none"],
        control: { type: "select" },
      },
  },
} satisfies Meta<StoryProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    items: items,
  },
};
