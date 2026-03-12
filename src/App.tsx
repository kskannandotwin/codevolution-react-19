import "./App.css";
import { Greet } from "./components/Greet";

function App() {
  return (
    <>
      <Greet name="Kannan" messageCount={10} isLoggedIn={true} />
    </>
  );
}

export default App;
