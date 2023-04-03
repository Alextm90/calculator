import './App.css';
import { useState } from "react";

function App() {
  
  let regex1 = /\d\.\.|\.\d+\.|\.\./
  let regex2 = /(\d\s(\*|\/|\+)\s\s-\s\s(\+|\*|\/)\s)|(\d*\s(\+|\/|\*)\s\s(\+|\/|\*)\s)|(\s-\s\s-\s)|(\d\s-\s\s(\*|\/)\s)$/
  let regex3 = /\d+(\s\+\s\s(\*|\/)\s)|\d+(\s\/\s\s(\*|\+)\s)|\d+(\s\*\s\s(\/|\+)\s)/
  let regex4 = /^\s\+\s$|^\s\*\s$|^\s\/\s$|^\s-\s$/
  let regex5 = /\d/
  let regex6 = /\+|-|\*|\//
  let replaceRegex1 = /\s\+\s$|\s\/\s$|\s\*\s$/
  let replaceRegex2 = /(\s\-\s)$|(\s(\*|\/|\+|-)\s\s-\s)$/

  const [display, setDisplay] = useState(0);
  const [history, setHistory] = useState("");
  const [equal, setEqual] = useState("");

  const clearDisplay = () => {
    setDisplay(0);
    setEqual("");
    setHistory("");
  };

  const setInput = (e) => {
    if (regex4.test(display) === true && regex5.test(e.target.value) === false) {
      console.log("ok", display)
      setDisplay(e.target.value)
    }
    else if (regex3.test(display + e.target.value) === true) {
      console.log("yes")
      setDisplay(display.replace(replaceRegex1, e.target.value))
    }
    else if (regex2.test(display + e.target.value) === true) {
      console.log("pie")
      setDisplay(display.replace(replaceRegex2, e.target.value))
    }
    else if (regex1.test(display + e.target.value) === true || regex1.test(display + e.target.value) === true || regex1.test(display + e.target.value) === true) {
      setDisplay(display)
      console.log("4")
    }
    else if (display === 0 && e.target.id === "zero") {
      setDisplay(0)
      console.log("3")
    }
    else if (display === 0 && regex6.test(e.target.value) === false) {
      setDisplay(e.target.value)
      console.log("2", e.target.id)
    }
    else {
      setDisplay(display + e.target.value)
      console.log("1")
    }
  };
  
  const evaluateStr = () => {
       setHistory(display)
       setEqual(" = ")
       setDisplay(eval(display))
  }
  return (
    <div className="App">
      <div id='calculator'>
       <div id="container">
       <div id='display-history'>{history}{equal}</div>
       <div id="display">{display}</div>
       <button id="clear" onClick={clearDisplay}>AC</button>
       <button id="equals" onClick={evaluateStr}>=</button>
       <button id="seven" value={7} onClick={(e) => setInput(e)}>7</button>
       <button id="eight" value={8} onClick={(e) => setInput(e)}>8</button>
       <button id="nine" value={9} onClick={(e) => setInput(e)}>9</button>
       <button id="four" value={4} onClick={(e) => setInput(e)}>4</button>
       <button id="five" value={5} onClick={(e) => setInput(e)}>5</button>
       <button id="six" value={6} onClick={(e) => setInput(e)}>6</button>
       <button id="one" value={1} onClick={(e) => setInput(e)}>1</button>
       <button id="two" value={2} onClick={(e) => setInput(e)}>2</button>
       <button id="three" value={3} onClick={(e) => setInput(e)}>3</button>
       <button id="zero" value={0} onClick={(e) => setInput(e)}>0</button>
       <button id="add" value={" + "} onClick={(e) => setInput(e)}>+</button>
       <button id="subtract" value={" - "} onClick={(e) => setInput(e)}>-</button>
       <button id="multiply" value={" * "} onClick={(e) => setInput(e)}>X</button>
       <button id="divide" value={" / "} onClick={(e) => setInput(e)}>/</button>
       <button id="decimal" value={"."} onClick={(e) => setInput(e)}>.</button>
       </div>
     </div>
    </div>
  );
}

export default App;