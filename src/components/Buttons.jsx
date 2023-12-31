import React from 'react'
import "../App.css"

const Buttons = ({onButtonClick}) => {
  return (
    <div className='calculator_keys'>
      <button className='calculator_key calculator_key--operator' onClick={()=>onButtonClick("+")}>+</button>
      <button className='calculator_key calculator_key--operator' onClick={()=>onButtonClick("-")}>-</button>
      <button className='calculator_key calculator_key--operator' onClick={()=>onButtonClick("*")}>*</button>
      <button className='calculator_key calculator_key--operator' onClick={()=>onButtonClick("/")}>÷</button>
      <button className='calculator_key' onClick={()=>onButtonClick("7")}>7</button>
      <button className='calculator_key' onClick={()=>onButtonClick("8")}>8</button>
      <button className='calculator_key' onClick={()=>onButtonClick("9")}>9</button>
      <button className='calculator_key' onClick={()=>onButtonClick("4")}>4</button>
      <button className='calculator_key' onClick={()=>onButtonClick("5")}>5</button>
      <button className='calculator_key' onClick={()=>onButtonClick("6")}>6</button>
      <button className='calculator_key' onClick={()=>onButtonClick("1")}>1</button>
      <button className='calculator_key' onClick={()=>onButtonClick("2")}>2</button>
      <button className='calculator_key' onClick={()=>onButtonClick("3")}>3</button>
      <button className='calculator_key' onClick={()=>onButtonClick("0")}>0</button>
      <button className='calculator_key' onClick={()=>onButtonClick(".")}>.</button>
      <button className='calculator_key calculator_key--C' onClick={()=>onButtonClick("C")}>C</button>
      <button className='calculator_key calculator_key--enter' onClick={()=>onButtonClick("=")}>=</button>
      
    </div>
  )
}

export default Buttons;