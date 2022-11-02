import "./App.css";

import { useState } from "react";

function App(){

const [result,setResult]=useState("");

const clickHandler=(event)=>{
    setResult(result.concat(event.target.value))
}

const clearDisplay=()=>{
    setResult("");
}

const calculate=()=>{// eslint-disable-next-line
    setResult(eval(result).toString());
}

return(
    
    <div className="calc">
        <input type="text" placeholder="0" id="answer" value={result}/>
         <input type="button" value="9" className="btn" onClick={clickHandler}/>
         <input type="button" value="8" className="btn"onClick={clickHandler}/>
         <input type="button" value="7" className="btn" onClick={clickHandler}/>
         <input type="button" value="6" className="btn" onClick={clickHandler}/>
         <input type="button" value="5" className="btn" onClick={clickHandler}/>
         <input type="button" value="4" className="btn" onClick={clickHandler}/>
         <input type="button" value="3" className="btn" onClick={clickHandler}/>
         <input type="button" value="*" className="btn" onClick={clickHandler}/>
         <input type="button" value="2" className="btn" onClick={clickHandler}/>
         <input type="button" value="1" className="btn" onClick={clickHandler}/>
         <input type="button" value="0" className="btn" onClick={clickHandler}/>
         <input type="button" value="." className="btn" onClick={clickHandler}/>
         <input type="button" value="+" className="btn" onClick={clickHandler}/>
         <input type="button" value="-" className="btn" onClick={clickHandler}/>
         <input type="button" value="/" className="btn" onClick={clickHandler}/>
         <input type="button" value="%" className="btn" onClick={clickHandler}/>
         <input type="button" value="clear" className="btn1" onClick={clearDisplay}/>
         <input type="button" value="=" className="btn1" onClick={calculate}/>
         </div>
    
)

}
export default App;
