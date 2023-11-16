import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import "./App.css";
function Form({ name, setName, price, setPrice, setData, data }) {
  const [formSubmitted, setFormSubmitted] = useState(true);
  return (
    <form
      action=""
      className="form-container"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <input
        type="text"
        value={name}
        className={`input-field ${formSubmitted ? "form-submitted" : ""}`}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        type="text"
        value={price}
        className={`input-field ${formSubmitted ? "form-submitted" : ""}`}
        onChange={(e) => {
          setPrice(e.target.value);
        }}
      />
      <button
        className="submit-button"
        type="submit"
        onClick={() => {
          let newData = {
            name: name,
            unitPrice: price,
          };
          setName("");
          setPrice("");

          axios
            .post("https://northwind.vercel.app/api/products/", newData)
            .then((res) => {
              setData([...data, res.data]);
              setFormSubmitted(!formSubmitted);
            });
        }}
      >
        Post
      </button>
    </form>
  );
}
export default Form;
