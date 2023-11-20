import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Table from "./Table.jsx";
import { useNavigate } from "react-router-dom";
import styles from "./login.module.css";
function Login({
  name,
  setName,
  password,
  setPassword,
  data,
  setData,
  setCheck,
  isAdmin,
  setIsAdmin,
}) {
  const navigate = useNavigate();
  useEffect(() => {
    axios("https://654e4ec3cbc325355742b77f.mockapi.io/users").then((res) => {
      setData(res.data);
    });
  }, []);
  return (
    <form
      className={styles.formCont}
      action=""
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <label htmlFor="">Name</label>
      <input
        className={styles.inputt}
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <label htmlFor="">Password</label>
      <input
        className={styles.inputt}
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button
        className={styles.button}
        onClick={() => {
          navigate("/");
          setName("");
          setPassword("");
          let user = data.find((item) => {
            return item.name == name && item.password == password;
          });
          let admin = data.find((item) => {
            if (item.name == name && item.isAdmin === true) {
              setIsAdmin(item.isAdmin);
              console.log(item.isAdmin);
            }
          });
          user
            ? setCheck(true)
            : setCheck(false) && alert("account doesnt exist");
        }}
      >
        Login
      </button>
    </form>
  );
}
export default Login;
