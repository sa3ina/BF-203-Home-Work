import React, { useState } from "react";
import "./App.css";

const Input = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="input-button-container">
      <input
        type="text"
        placeholder="Type something..."
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
          console.log(e.target.value);
        }}
        className="custom-input"
      />
    </div>
  );
};

export default Input;
