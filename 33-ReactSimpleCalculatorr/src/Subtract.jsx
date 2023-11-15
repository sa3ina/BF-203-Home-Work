import React from "react";
function Total({ input1, input2, setResult }) {
  const handlePlus = () => {
    setResult(Number(input1) - Number(input2));
  };
  return (
    <button type="button" onClick={() => handlePlus()}>
      -
    </button>
  );
}
export default Total;
