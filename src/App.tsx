import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeWrapper } from "./theme";
import { Navigation } from "./router/Navigation";
import { SnackbarProvider } from "notistack";

function App() {
  return (
    <ThemeWrapper>
      <SnackbarProvider />
      <Navigation />
    </ThemeWrapper>
  );
}

export default App;
