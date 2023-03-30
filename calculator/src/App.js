import './App.css';
import {useState} from "react";

function App() {
  
  let testRegex = /\d\.\.|\.\d+\.|\.\./
  let testRegex2 = /\d\s\*\s\s-\s\s\+\s/
  let newRegex = /\s\*\s\s-\s/

  const [display, setDisplay] = useState(0);

  const clearDisplay = () => {
    setDisplay(0);
  };

  const setInput = (e) => {
    if (testRegex2.test(display + e.target.value) === true) {
      console.log("yes")
      setDisplay(display.replace(newRegex, e.target.value))
    }
    else if (testRegex.test(display + e.target.value) === true || testRegex.test(display + e.target.value) === true || testRegex.test(display + e.target.value) === true) {
      setDisplay(display)
    }
    else if (display === 0 && e.target.id === "zero") {
      setDisplay(0)
    }
    else if (display === 0) {
      setDisplay(e.target.value)
    }
    else {
      setDisplay(display + e.target.value)
    }
  };
  
  const evaluateStr = () => {
       let ans = eval(display)
       setDisplay(ans)
  }
  return (
    <div className="App">
      <div id="container">
       <div id="display">{display}</div>
       <button id="clear" onClick={clearDisplay}>AC</button>
       <button id="equals" onClick={evaluateStr}>=</button>
       <button id="nine" value={9} onClick={(e) => setInput(e)}>9</button>
       <button id="eight" value={8} onClick={(e) => setInput(e)}>8</button>
       <button id="seven" value={7} onClick={(e) => setInput(e)}>7</button>
       <button id="six" value={6} onClick={(e) => setInput(e)}>6</button>
       <button id="five" value={5} onClick={(e) => setInput(e)}>5</button>
       <button id="four" value={4} onClick={(e) => setInput(e)}>4</button>
       <button id="three" value={3} onClick={(e) => setInput(e)}>3</button>
       <button id="two" value={2} onClick={(e) => setInput(e)}>2</button>
       <button id="one" value={1} onClick={(e) => setInput(e)}>1</button>
       <button id="zero" value={0} onClick={(e) => setInput(e)}>0</button>
       <button id="add" value={" + "} onClick={(e) => setInput(e)}>+</button>
       <button id="subtract" value={" - "} onClick={(e) => setInput(e)}>-</button>
       <button id="multiply" value={" * "} onClick={(e) => setInput(e)}>X</button>
       <button id="divide" value={" / "} onClick={(e) => setInput(e)}>/</button>
       <button id="decimal" value={"."} onClick={(e) => setInput(e)}>.</button>
      </div>
    </div>
  );
}

export default App;