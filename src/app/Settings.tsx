import { Button } from "@/components/ui/button/Button";
import { Label } from "@/components/ui/label";
import { useTheme } from "@/theme/hooks/useTheme";

export default function Settings() {
  // Set the theme to dark mode.
  const { theme, changeTheme } = useTheme();

  return (
    <div>
      <div>
        <Button
          onClick={() => changeTheme(theme == "light" ? "dark" : "light")}
        >
          Change Theme
        </Button>
      </div>
      <div>
        <Label>{theme}</Label>
      </div>
    </div>
  );
}
