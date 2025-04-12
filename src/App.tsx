import "bootstrap/dist/css/bootstrap.min.css";
import { HomePage } from "./pages/HomePage";
import { ThemeWrapper } from "./theme";
import { Navigation } from "./router/Navigation";

function App() {
  return (
    <ThemeWrapper>
      <Navigation />
    </ThemeWrapper>
  );
}

export default App;
