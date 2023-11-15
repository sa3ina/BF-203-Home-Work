import React, { useState } from "react";
import Input1 from "./Input1.jsx";
import Input2 from "./Input2.jsx";
import Result from "./Result.jsx";
import Total from "./Total.jsx";
import Subtract from "./Subtract.jsx";
import Multiplying from "./Multiplying.jsx";
import Divided from "./Divided.jsx";

function Calculator() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [result, setResult] = useState(0);

  return (
    <div className="container">
      <Input1 input1={input1} setInput1={setInput1} />
      <Input2 input2={input2} setInput2={setInput2} />
      <div className="buttons">
        <Total input1={input1} input2={input2} setResult={setResult} />
        <Subtract input1={input1} input2={input2} setResult={setResult} />
        <Multiplying input1={input1} input2={input2} setResult={setResult} />
        <Divided input1={input1} input2={input2} setResult={setResult} />
      </div>
      <Result result={result} />
    </div>
  );
}

export default Calculator;
