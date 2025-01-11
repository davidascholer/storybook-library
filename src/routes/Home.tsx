import { Button } from "@/components/ui/button/Button";
import { Label } from "@/components/ui/label";
import AppSidebar from "@/components/ui/sidebar/AppSidebar";
import { useTheme } from "@/theme/hooks/useTheme";

export default function Home() {
  // Set the theme to dark mode.
  const { theme, changeTheme } = useTheme();

  return (
    <AppSidebar>
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
