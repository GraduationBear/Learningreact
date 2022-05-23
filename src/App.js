import { useState } from "react";
import Item from "./components/Item/Item";

function App() {
  const [toggle, setToggle] = useState(false);

  const changeState = () => {
    setToggle(!toggle);
  };

  return (
    <div className="App">
      <div className={toggle ? "box animated" : "box"}></div>
      <button onClick={changeState}>Change State</button>
    </div>
  );
}

export default App;
