import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Display from './components/Display'
import Buttons from './components/Buttons'

function App() {
  const [calVal, setCalVal] = useState("");
  const onButtonClick = (buttonText) => {
    if(buttonText ==="C"){
      setCalVal("");
    }else if(buttonText === "="){
      const result =eval(calVal);
      setCalVal(result);
    }else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };
  

  return (
    <>
      <div className="calculator" >
        <Display displayValue={calVal}></Display>
        <Buttons onButtonClick={onButtonClick} ></Buttons>
        
      </div>
      
    </>
  )
}

export default App
