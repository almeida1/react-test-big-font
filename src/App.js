import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [size, changeSize] = useState("You didn't press any button yet");

  return (
    <div className="App1">
      <div>
        <h3>Fatec ZL </h3>
      </div>
      <p id="para1" onClick={changeSize.bind(null, "big")}>
        Make the text big
      </p>
      <p onClick={changeSize.bind(null, "small")}>Make the text small</p>

      <div id="result" className={`box ${size}`}>
        {size}
      </div>
    </div>
  );
}
