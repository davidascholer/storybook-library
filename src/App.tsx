import { ThemeProvider } from "./theme/ThemeProvider";
import RouterManager from "./router/RouterManager";
import Routes from "./router/Routes";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterManager>
        <Routes />
      </RouterManager>
    </ThemeProvider>
  );
}

export default App;
