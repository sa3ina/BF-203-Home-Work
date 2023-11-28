import { useState } from "react";

import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <div className="left">
          <div className="left-wrapper">
            <p className="social">
              Social media shared today, tomorrow or by location
            </p>
            <div className="image">
              <div className="images">
                <img className="left-photo" src="imgfeatures-archive 4.png" />
                <img
                  className="right-photo"
                  src="imgfeatures-archive 5.png"
                  alt=""
                />
                <img
                  className="center-photo"
                  src="imgfeatures-archive 6.png"
                  alt=""
                />{" "}
              </div>
            </div>
            <div className="circles">
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="right-wrapper">
            <div className="cap">
              <img src="img-new-logo-low-quality.png" alt="" />
              <p className="capzul">Capzul</p>
            </div>
            <div className="createacc">
              {" "}
              <p className="create">Create account</p>
              <p className="for">For business, band or celebrity.</p>
            </div>
            <div className="inputs">
              <div className="input1">
                <label htmlFor="">First Name</label>
                <input type="text" />
              </div>
              <div className="input1">
                <label htmlFor="">Last Name</label>
                <input type="text" />
              </div>
              <div className="input1">
                <label htmlFor="">Email or phone number</label>
                <input type="text" />
              </div>
              <div className="input1">
                <label htmlFor="">Date of birth (MM/DD/YY)</label>
                <input type="text" />
              </div>
              <div className="input1">
                <label htmlFor="">Password</label>
                <input type="text" />
              </div>
              <div className="input1">
                <label htmlFor="">Confirm password</label>
                <input type="text" />
              </div>
            </div>
            <div className="checkboxes">
              <div>
                <div className="remember">
                  <input className="checkbox" type="checkbox"></input>
                  <p className="remembertext">Remember me</p>
                </div>
                <div className="agree">
                  <input className="checkbox" type="checkbox"></input>
                  <p className="agreetext">
                    I agree to all the Terms and Privacy policy
                  </p>
                </div>
              </div>
              <div className="forgot">
                <p>Forgot password?</p>
              </div>
            </div>

            <div className="buttons">
              <button className="createbutton">Create account</button>
              <button className="signin">Sign-in with google</button>
            </div>
            <div className="dont">
              <p className="first">Don’t have an account? </p>
              <p className="second">Log In</p>
            </div>
            <div className="last">
              <img className="google" src="google.png" alt="" />
              <img src="app.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
