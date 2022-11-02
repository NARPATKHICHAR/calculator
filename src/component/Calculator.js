import "./styles.css";

import { useState } from "react";

function App() {
 
  const [result, setResult] = useState(null);

  const [expression, setExpression] = useState([]);

  // const clickHandler = (event) => {
  //   setResult(result.concat(event.target.value));
  // };

  // const clearDisplay = () => {
  //   setResult("");
  // };

  // const calculate = () => {
  //   // eslint-disable-next-line
  //   setResult(eval(result).toString());
  // };

  const clickHandler = (event) => {
    expression.push(event.target.value);
    setExpression([...expression]);
  };

  const clearDisplay = () => {
    setResult(null);
    setExpression([]);
  };

  const evaluate = (a, op, b) => {
    console.log({ a, b, op });
    switch (op) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "*":
        return a * b;
      case "/":
        return a / b;
      case "%":
        return a % b;
      default:
        throw new Error("wrong operand");
    }
  };

  //expressio = [2, + , 3]
  // state = []

  const calculate = () => {
    //[ 2, +, 3 ]
    let state = [...expression];
    let b = state.pop(); //3
    //[2, +]
    let op = state.pop(); //+
    //[2]
    let a = state.pop(); //2

    let res;

    if (result === null) {
      res = evaluate(a, op, b);
    } else {
      res = evaluate(result, op, b);
    }

    setResult(res);
  };

  return (
    <div className="cls">
    <div className="calc">
      <input
        type="text"
        placeholder="0"
        id="answer"
        value={expression.join("")}
      />
      <input type="text" placeholder="0" id="answer" value={result || 0} />
      <input type="button" value="9" className="btn" onClick={clickHandler} />
      <input type="button" value="8" className="btn" onClick={clickHandler} />
      <input type="button" value="7" className="btn" onClick={clickHandler} />
      <input type="button" value="6" className="btn" onClick={clickHandler} />
      <input type="button" value="5" className="btn" onClick={clickHandler} />
      <input type="button" value="4" className="btn" onClick={clickHandler} />
      <input type="button" value="3" className="btn" onClick={clickHandler} />
      <input type="button" value="*" className="btn" onClick={clickHandler} />
      <input type="button" value="2" className="btn" onClick={clickHandler} />
      <input type="button" value="1" className="btn" onClick={clickHandler} />
      <input type="button" value="0" className="btn" onClick={clickHandler} />
      <input type="button" value="." className="btn" onClick={clickHandler} />
      <input type="button" value="+" className="btn" onClick={clickHandler} />
      <input type="button" value="-" className="btn" onClick={clickHandler} />
      <input type="button" value="/" className="btn" onClick={clickHandler} />
      <input type="button" value="%" className="btn" onClick={clickHandler} />
      <input
        type="button"
        value="clear"
        className="btn1"
        onClick={clearDisplay}
      />
      <input type="button" value="=" className="btn1" onClick={calculate} />
    </div>
    </div>
  );
}
export default App;
