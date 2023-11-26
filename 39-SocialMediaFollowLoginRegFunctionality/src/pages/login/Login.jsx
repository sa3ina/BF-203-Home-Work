import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import styles from "../../assets/styles/login.module.css";
function Login({
  name,
  setName,
  password,
  setPassword,
  users,
  setUsers,
  setCheck,
  check,
  user,
  setUser,
}) {
  const navigate = useNavigate();
  useEffect(() => {
    axios("http://localhost:3000/users").then((res) => {
      setUsers(res.data);
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
      <h3>Log into your account </h3>

      <input
        placeholder="Name"
        className={styles.inputt}
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />

      <input
        placeholder="Password"
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
          setName("");
          setPassword("");
          console.log(users);
          let userr = users.find((item) => {
            return item.name == name && item.password == password;
          });
          console.log(userr);
          setUser(userr.id);

          userr ? setCheck(true) : setCheck(false);
          userr ? navigate("/friends") : navigate("/");
          console.log(userr);
          localStorage.setItem("user", JSON.stringify(userr));
        }}
      >
        Login
      </button>
      <div className={styles.option}>
        <p className={styles.p}>Dont have an account ? </p>
        <a href="/register"> Sign in here</a>
      </div>
    </form>
  );
}
export default Login;
