import { useState } from "react";
import Greetings from "./components/Greetings";
import ProductInfo from "./components/ProductInfo";
import UserList from "./components/UserList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <UserList />
    </>
  );
}

export default App;
