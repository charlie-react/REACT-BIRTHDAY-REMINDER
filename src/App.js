import logo from "./logo.svg";
import "./App.css";

import { data } from "./data";
import Individual from "./Individual";
import { useState } from "react";

function App() {
  const [value,setValue] = useState(data)
  const [num,setNum] = useState(5)
  const handleClearAndNum = ()=>{
    setValue([]);
    setNum( (prevNum)=> prevNum - prevNum)
  } 
  return (
    <section className="main-sec">
      <h1 className="title">{num} Birthdays Today</h1>
      {value.map((indData) => {
        return <Individual key={indData.id} {...indData} />;
      })}
      <button onClick={handleClearAndNum }>Clear Reminder</button>
    </section>
  );
}

export default App;
