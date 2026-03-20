import "./App.css";
import { ThemeContextProvider } from "./components/chatgpt-context/ThemeProvider";

function App() {
  return (
    <>
      <div>
        <ThemeContextProvider />
      </div>
    </>
  );
}

export default App;
