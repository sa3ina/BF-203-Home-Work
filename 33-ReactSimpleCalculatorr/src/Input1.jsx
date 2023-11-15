import React from "react";

function Input1({ input1, setInput1 }) {
  const handleInput1Change = (e) => {
    setInput1(e.target.value);
  };
  return (
    <input
      type="number"
      value={input1}
      onChange={(e) => handleInput1Change(e)}
    />
  );
}
export default Input1;
