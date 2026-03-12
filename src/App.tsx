import "./App.css";
import { Container } from "./components/Container";
import { Input } from "./components/Input";

function App() {
  return (
    <>
      <div>
        <Container styles={{ border: "1px solid black", padding: "1rem" }} />
        <Input value="" handleChange={(event) => console.log(event)} />
      </div>
    </>
  );
}

export default App;
