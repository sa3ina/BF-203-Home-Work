import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Table from "./Table.jsx";

function Form({
  name,
  setName,
  password,
  setPassword,
  data,
  setData,
  setCheck,
}) {
  useEffect(() => {
    axios("https://654e4ec3cbc325355742b77f.mockapi.io/users").then((res) => {
      setData(res.data);
    });
  }, []);
  return (
    <form
      className="form-container"
      action=""
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <label htmlFor="">Name</label>
      <input
        className="input-field"
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <label htmlFor="">Password</label>
      <input
        className="input-field"
        type="text"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button
        className="login-button"
        onClick={() => {
          let user = data.find((item) => {
            return item.name == name && item.password == password;
          });
          user ? setCheck(true) : setCheck(false);
        }}
      >
        Login
      </button>
    </form>
  );
}
export default Form;
