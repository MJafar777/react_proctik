import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Input from "./components/input";
import Button from "./components/Button";

function App() {
   const [count, setCount] = useState(0);
   const [toggle, setToggle] = useState(false);
   const [val, setVal] = useState("hello");
   return (
      <div className="App">
         <h1>Count: {count}</h1>
         <button onClick={() => setCount((pr) => pr + 1)}>incr</button>
         <button onClick={() => setCount((prev) => prev - 1)}>decr</button>
         <button onClick={() => setToggle(!toggle)}>toggle</button>
         {toggle ? <p>Hello World</p> : ""}
         <br />
         <label>{val}</label>
         <input value={val} onChange={(e) => setVal(e.target.value)} />
         <Input type={"number"} style={{ backgroundColor: "pink" }} />
         <Button style={{ backgroundColor: "purple" }}>Hello World</Button>
      </div>
   );
}

export default App;
