import React from "react";
import ReactDOM from "react-dom";

const fName = "Zakaria";
const lName = "Ibrahim";
let luckyNum = Math.floor(Math.random() * 10);

ReactDOM.render(
  <div>
    <center>
      <h1>Hello My Name is {fName + " " + lName}</h1>
    </center>
    <p>My lucky number for this moment is {luckyNum}!</p>
  </div>,
  document.getElementById("root")
);
