import React from "react";
function Divided({ input1, input2, setResult }) {
  const handleDivide = () => {
    setResult(Number(input1) / Number(input2));
  };
  return (
    <button type="button" onClick={() => handleDivide()}>
      :
    </button>
  );
}
export default Divided;
//divide
