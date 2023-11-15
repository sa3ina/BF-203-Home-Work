import React from "react";
function Subtract({ input1, input2, setResult }) {
  const handleMinus = () => {
    setResult(Number(input1) + Number(input2));
  };
  return (
    <button type="button" onClick={() => handleMinus()}>
      +
    </button>
  );
}
export default Subtract;
