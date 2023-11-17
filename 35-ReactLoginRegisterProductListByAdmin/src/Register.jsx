import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

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
  //   useEffect(() => {
  //     axios("https://654e4ec3cbc325355742b77f.mockapi.io/users").then((res) => {
  //       setData(res.data);
  //     });
  //   }, []);
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
        value={nameRegister}
        onChange={(e) => {
          setNameRegister(e.target.value);
        }}
      />
      <label htmlFor="">Email</label>
      <input
        className="input-field"
        type="text"
        value={emailRegister}
        onChange={(e) => {
          setEmailRegister(e.target.value);
        }}
      />
      <label htmlFor="">Password</label>
      <input
        className="input-field"
        type="text"
        value={passwordRegister}
        onChange={(e) => {
          setPasswordRegister(e.target.value);
        }}
      />
      <label htmlFor="">Admin</label>
      <input
        className="input-field"
        type="text"
        value={isAdmin}
        onChange={(e) => {
          setIsAdmin(e.target.value);
        }}
      />
      <button
        className="register-button"
        onClick={() => {
          setCheck(true);
          let newUser = {
            name: nameRegister,
            password: passwordRegister,
            email: emailRegister,
            isAdmin: isAdmin,
          };
          setNameRegister("");
          setEmailRegister("");
          setPasswordRegister("");
          setIsAdmin("");
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
