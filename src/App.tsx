import "./App.css";
import { Box } from "./components/context/Box";
import { ThemeContextProvider } from "./components/context/ThemeProvider";

function App() {
  return (
    <>
      <div>
        <ThemeContextProvider>
          <Box />
        </ThemeContextProvider>
      </div>
    </>
  );
}

export default App;
