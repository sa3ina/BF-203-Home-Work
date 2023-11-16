import React from "react";
import "./App.css";

const Button = ({ data, setData }) => {
  return (
    <div className="button-container">
      <button
        className="primary-button"
        onClick={() => {
          const filtered = [...data].sort((a, b) =>
            a.name.localeCompare(b.name)
          );
          setData(filtered);
          console.log(data);
        }}
      >
        A to Z
      </button>
      <button
        className="secondary-button"
        onClick={() => {
          const filtered = [...data].sort((a, b) =>
            b.name.localeCompare(a.name)
          );
          setData(filtered);
          console.log(data);
          console.log(filtered);
        }}
      >
        Z to A
      </button>
      <button
        className="success-button"
        onClick={() => {
          const filtered = [...data].sort((a, b) => a.unitPrice - b.unitPrice);
          setData(filtered);
          console.log(data);
          console.log(filtered);
        }}
      >
        min to max
      </button>
      <button
        className="danger-button"
        onClick={() => {
          const filtered = [...data].sort((a, b) => b.unitPrice - a.unitPrice);
          setData(filtered);
          console.log(data);
          console.log(filtered);
        }}
      >
        max to min
      </button>
    </div>
  );
};

export default Button;
