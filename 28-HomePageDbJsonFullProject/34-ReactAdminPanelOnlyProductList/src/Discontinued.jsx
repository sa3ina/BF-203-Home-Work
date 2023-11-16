import React, { useState } from "react";
import "./App.css";
function Discontinued({ data, setData }) {
  return (
    <>
      <button
        className="custom-button"
        onClick={() => {
          const discontinued = data.filter(
            (data) => data.discontinued === true
          );
          setData(discontinued);
        }}
      >
        Discontinued
      </button>
      ;
    </>
  );
}
export default Discontinued;
