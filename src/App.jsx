import { useState } from "react";
import "./App.css";
import Display from "./components/Display";
import Buttons from "./components/Buttons";

function App() {
  const [calVal, setCalVal] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };

  return (
    <>
      <div className="calculator">
        <div className="cal-name">Abhishek's calculator</div>
        <Display displayValue={calVal}></Display>
        <Buttons onButtonClick={onButtonClick}></Buttons>
      </div>
    </>
  );
}

export default App;
