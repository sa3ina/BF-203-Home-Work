import React from "react";
function Input2({ input2, setInput2 }) {
  const handleInput2Change = (e) => {
    setInput2(e.target.value);
  };
  return (
    <input
      type="number"
      value={input2}
      onChange={(e) => handleInput2Change(e)}
    />
  );
}
export default Input2;
