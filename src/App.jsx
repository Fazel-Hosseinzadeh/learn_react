import { useState } from "react";
import Greetings from "./components/Greetings";
import ProductInfo from "./components/ProductInfo";
import UserList from "./components/UserList";
import Person from "./components/Person";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
  <Person name ="Alex" age ="20" hobbies = {["Reading", "Coding", "Playing Chess"]} />
    </>
  );
}

export default App;
