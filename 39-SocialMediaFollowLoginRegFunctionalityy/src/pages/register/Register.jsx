import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import styles from "../../assets/styles/register.module.css";
import { useNavigate } from "react-router-dom";
function Register({
  nameRegister,
  emailRegister,
  passwordRegister,

  setNameRegister,
  setPasswordRegister,
  setEmailRegister,

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
      <h3>Create an account</h3>

      <input
        placeholder="Name"
        className={styles.inputt}
        type="text"
        value={nameRegister}
        onChange={(e) => {
          setNameRegister(e.target.value);
        }}
      />

      <input
        placeholder="Email"
        className={styles.inputt}
        type="text"
        value={emailRegister}
        onChange={(e) => {
          setEmailRegister(e.target.value);
        }}
      />

      <input
        placeholder="Password"
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
          const containsUpperCase = /[A-Z]/.test(nameRegister);
          if (!containsUpperCase) {
            alert("Name must include at least one uppercase letter.");
            return;
          }

          if (passwordRegister.length <= 3) {
            alert("Password must be more than 3 characters.");
            return;
          }

          navigate("/");
          setCheck(true);
          let newUser = {
            name: nameRegister,
            password: passwordRegister,
            email: emailRegister,
          };
          setNameRegister("");
          setEmailRegister("");
          setPasswordRegister("");

          axios.post("http://localhost:3000/users", newUser);
        }}
      >
        Register
      </button>
      <div className={styles.option}>
        <p className={styles.p}>Already have an account ? </p>
        <a href="/">Login</a>
      </div>
    </form>
  );
}
export default Register;
