import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import styles from "../../assets/styles/register.module.css";
import { useNavigate } from "react-router-dom";
function Register({
  nameRegister,
  emailRegister,
  passwordRegister,
  isAdmin,
  setNameRegister,
  setPasswordRegister,
  setEmailRegister,
  setIsAdmin,
  setCheck,
  check,
}) {
  const navigate = useNavigate();

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
        value={nameRegister}
        onChange={(e) => {
          setNameRegister(e.target.value);
        }}
      />
      <label htmlFor="">Email</label>
      <input
        className={styles.inputt}
        type="text"
        value={emailRegister}
        onChange={(e) => {
          setEmailRegister(e.target.value);
        }}
      />
      <label htmlFor="">Password</label>
      <input
        className={styles.inputt}
        type="password"
        value={passwordRegister}
        onChange={(e) => {
          setPasswordRegister(e.target.value);
        }}
      />
      <button
        className={styles.button}
        onClick={() => {
          navigate("/login");
          setCheck(true);
          let newUser = {
            name: nameRegister,
            password: passwordRegister,
            email: emailRegister,
          };
          setNameRegister("");
          setEmailRegister("");
          setPasswordRegister("");

          axios.post(
            "https://654e4ec3cbc325355742b77f.mockapi.io/users",
            newUser
          );
        }}
      >
        Register
      </button>
    </form>
  );
}
export default Register;
