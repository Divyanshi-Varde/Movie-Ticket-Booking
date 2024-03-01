import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import { GoEye, GoEyeClosed } from "react-icons/go";
import toast from "react-hot-toast";
import { useFormik } from "formik";
import { loginSchema } from "../../schema/loginSchema";
import "./LoginPage.css";

interface LoginPageProps {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginPage: React.FC<LoginPageProps> = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();
  const initialValues = {
    phone: "",
    password: "",
  };

  const { values, errors, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: loginSchema,
    onSubmit: (values) => {
      console.log(values);
      setIsLoggedIn(true);
      toast.success("Logged In Successfully!");
      navigate("/");
      console.log("in the onsubmit");
    },
  });

  const [showPassword, setShowPassword] = useState<boolean>(false);

  function clickHandler() {
    navigate("/signup");
  }

  function returnHandler() {
    navigate("/");
  }

  return (
    <div className="login_wrapper">
      <div className="return_text">
        <div className="icon">
          <FaArrowLeft size={28} />
        </div>
        <div className="return" onClick={returnHandler}>
          Return
        </div>
      </div>
      <div className="login_container">
        <div className="login_heading">Log in to TIX ID</div>

        <form onSubmit={handleSubmit}>
          <div className="login_form">
            <div className="phone_field">
              <label id="phone" className="phone_label">
                Mobile Number
              </label>
              <br></br>
              <input
                className="phone_input"
                name="phone"
                id="phone"
                onChange={handleChange}
                value={values.phone}
                onBlur={handleBlur}
                placeholder="+91 | Enter Mobile Number"
                autoComplete="off"
              />
              <p className="form-error">{errors.phone}</p>
            </div>

            <div className="password_field">
              <label id="password" className="password_label">
                Password
              </label>
              <br></br>
              <input
                className="password_input"
                name="password"
                id="password"
                type={showPassword ? "text" : "password"}
                onChange={handleChange}
                value={values.password}
                onBlur={handleBlur}
                placeholder="Enter Password"
                autoComplete="off"
              />
              <p className="form-error">{errors.password}</p>
              <div
                className="eye_icon"
                onClick={() => {
                  setShowPassword((prev) => !prev);
                }}
              >
                {showPassword ? <GoEye size={25} /> : <GoEyeClosed size={25} />}
              </div>
            </div>

            <div className="login_button">
              <button type="submit">Login Now</button>
            </div>

            <div className="form_text">Don't have an account yet?</div>

            <div className="signup_button">
              <button onClick={clickHandler}>Signup Now</button>
            </div>
          </div>
        </form>

        <div className="last_text">
          2021 TIX ID - PT Nusantara Elang Sejahtera.
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
