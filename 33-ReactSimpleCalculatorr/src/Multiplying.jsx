import React from "react";
function Multiplying({ input1, input2, setResult }) {
  const handleMultiply = () => {
    setResult(Number(input1) * Number(input2));
  };
  return (
    <button type="button" onClick={() => handleMultiply()}>
      x
    </button>
  );
}
export default Multiplying;
//multiply
