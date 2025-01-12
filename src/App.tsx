import { ThemeProvider } from "./theme/ThemeProvider";
import RouterManager from "./router/RouterManager";
import Routes from "./router/Routes";
import ReduxProvider from "./state/ReduxProvider";

function App() {
  return (
    <ReduxProvider>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RouterManager>
          <Routes />
        </RouterManager>
      </ThemeProvider>
    </ReduxProvider>
  );
}

export default App;
