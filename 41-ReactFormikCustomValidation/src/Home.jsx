import img1 from "./assets/images/img1.png";
import img2 from "./assets/images/img2.png";
import img3 from "./assets/images/img3.png";
import low from "./assets/images/low.png";
import google from "./assets/images/google.png";
import app from "./assets/images/app.png";

import { Outlet, Link } from "react-router-dom";
import "./App.css";

const initialValues = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  cpassword: "",
  phone: "",
  checkbox: "",
};
const validate = (values) => {
  const errors = {};

  if (!/^[A-Za-z]+$/.test(values.firstname)) {
    errors.firstname = "Invalid symbols";
  } else if (values.firstname.length < 3) {
    errors.firstname = "Less than 3 letters";
  } else if (values.firstname.length > 10) {
    errors.firstname = "More than 10 letters";
  }

  if (!/^[A-Za-z]+$/.test(values.lastname)) {
    errors.lastname = "Invalid symbols";
  } else if (values.lastname.length < 3) {
    errors.lastname = "Less than 3 letters";
  } else if (values.lastname.length > 10) {
    errors.lastname = "More than 10 letters";
  }
  if (!/^\S+@\S+\.\S+$/.test(values.email)) {
    errors.email = "Invalid email";
  }

  if (!values.phone) {
    errors.phone = "Required";
  } else if (!/^(051|055|070)\d{7}$/.test(values.phone)) {
    errors.phone = "Invalid phone number format";
  }

  if (!values.password) {
    errors.password = "Password cannot be blank";
  } else if (values.password.length < 6) {
    errors.password = "More than 6 letters";
  } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(values.password)) {
    errors.password = "1 uppercase lowercase 1 letter 1 digit";
  }
  if (!values.cpassword) {
    errors.cpassword = "Password cannot be blank";
  } else if (values.password.length <= 6) {
    errors.cpassword = "More than 6 letters";
  } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(values.cpassword)) {
    errors.cpassword = "1 uppercase lowercase 1 letter 1 digit";
  } else if (values.password !== values.cpassword) {
    errors.cpassword = "Not the same password";
  }
  return errors;
};

import { useFormik } from "formik";
function Home() {
  const formik = useFormik({
    initialValues: initialValues,
    validate,
    onSubmit: (values) => {
      console.log(values);
      console.log(values.checkbox);
      console.log("salam");
      if (values.checkbox) {
        localStorage.setItem("data", JSON.stringify(values));
      } else {
        localStorage.removeItem("data");
      }
    },
  });

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
                <img className="left-photo" src={img2} />
                <img className="right-photo" src={img3} alt="" />
                <img className="center-photo" src={img1} alt="" />{" "}
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
              <img src={low} alt="" />
              <p className="capzul">Capzul</p>
            </div>
            <div className="createacc">
              {" "}
              <p className="create">Create account</p>
              <p className="for">For business, band or celebrity.</p>
            </div>{" "}
            <form action="">
              <div className="inputs">
                <div className="input1">
                  <label htmlFor="">First Name</label>
                  <input
                    type="text"
                    name="firstname"
                    value={formik.values.firstname}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.firstname ? (
                    <div className="formik">{formik.errors.firstname}</div>
                  ) : null}
                </div>
                <div className="input1">
                  <label htmlFor="">Last Name</label>
                  <input
                    type="text"
                    name="lastname"
                    value={formik.values.lastname}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.lastname ? (
                    <div className="formik">{formik.errors.lastname}</div>
                  ) : null}
                </div>
                <div className="input1">
                  <label htmlFor="">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.email ? (
                    <div className="formik">{formik.errors.email}</div>
                  ) : null}
                </div>
                <div className="input1">
                  <label htmlFor="">Phone number</label>
                  <input
                    type="text"
                    name="phone"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.phone ? (
                    <div className="formik">{formik.errors.phone}</div>
                  ) : null}
                </div>
                <div className="input1">
                  <label htmlFor="">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.password ? (
                    <div className="formik">{formik.errors.password}</div>
                  ) : null}
                </div>
                <div className="input1">
                  <label htmlFor="">Confirm password</label>
                  <input
                    type="password"
                    name="cpassword"
                    value={formik.values.cpassword}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.cpassword ? (
                    <div className="formik">{formik.errors.cpassword}</div>
                  ) : null}
                </div>

                <button className="createbutton" type="button">
                  <Link style={{ color: "white" }} to="login">
                    Create account
                  </Link>
                </button>
                <button className="signin">
                  {" "}
                  <Link style={{ color: "white" }} to="signin">
                    Sign-in with google{" "}
                  </Link>
                </button>
              </div>{" "}
              <div className="checkboxes">
                <div>
                  <div className="remember">
                    <input
                      className="checkbox"
                      type="checkbox"
                      name="checkbox"
                      value={formik.values.checkbox}
                      onChange={formik.handleChange}
                    ></input>
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
                  <p>
                    {" "}
                    <Link to="forgotpass">Forgot password?</Link>
                  </p>
                </div>
              </div>
            </form>
            <div className="dont">
              <p className="first">Don’t have an account? </p>
              <p className="second">
                <Link to="login">Log in </Link>
              </p>
            </div>
            <div className="last">
              <img className="google" src={google} alt="" />
              <img src={app} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
