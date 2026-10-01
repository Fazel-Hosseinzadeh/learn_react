import { useState } from "react";
import Greetings from "./components/Greetings";
import ProductInfo from "./components/ProductInfo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Greetings />
      <ProductInfo />
    </>
  );
}

export default App;
