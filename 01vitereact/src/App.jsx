import React from "react";
import "./index.css";
import Card from "./components/Card";
function App() {
  let newArr = [1, 2, 3];
  return (
    <>
      <h1 className="bg-blue-500">Tailwind test</h1>
      <Card username="Codevolution"  btnText="visit me" />
    </>
  );
}

export default App;
