import "./App.css";
import { ChatGptCounter } from "./components/state/ChatGptCounter";
import { ChatGptInput } from "./components/state/ChatGptInput";
import { ChatGptToggle } from "./components/state/ChatGptToggle";

function App() {
  return (
    <>
      <div>
        <ChatGptCounter />
        <ChatGptInput />
        <ChatGptToggle />
      </div>
    </>
  );
}

export default App;
