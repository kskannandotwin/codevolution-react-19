import "./App.css";
import { Greet } from "./components/Greet";
import { Heading } from "./components/Heading";
import { Oscar } from "./components/Oscar";

function App() {
  return (
    <>
      <Heading>React Framework</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo DiCaprio</Heading>
        <Heading>Oscar goes to Rehman</Heading>
      </Oscar>
      <Greet name="Kannan" isLoggedIn={false} />
    </>
  );
}

export default App;
