import "./App.css";
import { Greet } from "./components/Greet";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";

function App() {
  const personName = {
    first: "Bruce",
    last: "Wayne",
  };

  const nameList = [
    { first: "Bruce", last: "Wayne" },
    { first: "Clark", last: "Kent" },
    { first: "Diana", last: "Prince" },
  ];
  return (
    <>
      <Greet name="Kannan" messageCount={10} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />
    </>
  );
}

export default App;
