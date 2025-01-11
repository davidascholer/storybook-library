import Home from "@/routes/Home";
import { ThemeProvider } from "./theme/ThemeProvider";

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Home />
    </ThemeProvider>
  );
}

export default App;
