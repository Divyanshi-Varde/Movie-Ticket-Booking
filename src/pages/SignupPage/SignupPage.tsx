import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { GoEye, GoEyeClosed } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { signupSchema } from "../../schema/signupSchema";
import { setSignup } from "../../redux/Slices/signupSlice";
import toast from "react-hot-toast";
import "./SignupPage.css";
import { useDispatch } from "react-redux";



const SignupPage: React.FC= () => {
  const dispatch =useDispatch();
  const initialValues = {
    fname: "",
    phone: "",
    email: "",
    password: "",

  };

  const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: signupSchema,
    onSubmit: (values) => {
      console.log(values);
      dispatch(setSignup(values))
      toast.success("Signed In Successfully");
      navigate("/");
    },
  });
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleReturn = () => {
    setCurrentPage(1);
  };

  const handleClick = () => {
    navigate("/");
  };

  const handleContinue = () => {
    const isPageOneComplete = currentPage === 1 && values.fname && values.phone;
    const isPageTwoComplete =
      currentPage === 2 && values.email && values.password;

    if (isPageOneComplete || isPageTwoComplete) {
      setCurrentPage(currentPage + 1);
    } else {
      toast.error("Please fill all the fields before continuing");
    }
  };

  return (
    <div>
      {currentPage === 1 ? (
        <div className="signupOne_wrapper">
          <div className="return_button" onClick={handleClick}>
            <div className="icon_arrow">
              <FaArrowLeft size={28} />
            </div>
            <div className="return_button_text">Return</div>
          </div>
          <div className="signupOne_container">
            <div className="signupOne_heading">Sign up to TIX ID</div>

            <form onSubmit={handleSubmit}>
              <div className="signupOne_form">
                <div className="phone_field">
                  <label id="fname" className="fname_label">
                    Full name
                  </label>
                  <br></br>
                  <input
                    className="fname_input"
                    name="fname"
                    id="fname"
                    placeholder="Enter Full Name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoComplete="off"
                    value={values.fname}
                  />
                  <p className="form-error">{errors.fname}</p>
                </div>

                <div className="phone_field">
                  <label id="phone" className="phone_label">
                    Mobile Number
                  </label>
                  <br></br>
                  <input
                    className="phone_input"
                    name="phone"
                    id="phone"
                    placeholder="+91 | Enter Mobile Number"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoComplete="off"
                    value={values.phone}
                  />
                  <p className="form-error">{errors.phone}</p>
                </div>

                <button
                  onClick={() => {
                    handleContinue();
                  }}
                  className="continue_button"
                >
                  Continue
                </button>
              </div>
            </form>
            <div className="last_para">
              2021 TIX ID - PT Nusantara Elang Sejahtera.
            </div>
          </div>
        </div>
      ) : (
        <div className="signupTwo_wrapper">
          <div className="return_text2 " onClick={handleReturn}>
            <div className="icon2">
              <FaArrowLeft size={28} />
            </div>
            <div className="return2">Return</div>
          </div>
          <div className="signupTwo_container">
            <div className="signupTwo_heading">Sign up to TIX ID</div>

            <form onSubmit={handleSubmit}>
              <div className="signupTwo_form">
                <div className="email_field">
                  <label id="email" className="email_label">
                    Email Address
                  </label>
                  <br></br>
                  <input
                    className="phone_input"
                    name="email"
                    id="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoComplete="off"
                    value={values.email}
                    placeholder="Enter Email"
                  />
                </div>
                <p className="form-error">{errors.email}</p>

                <div className="password_field">
                  <label id="password" className="password_label">
                    Password
                  </label>
                  <br></br>
                  <input
                    className="password_input"
                    name="password"
                    id="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoComplete="off"
                    value={values.password}
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter Password"
                  />
                  <p className="form-error">{errors.password}</p>
                  <div
                    className="eye_icon"
                    onClick={() => {
                      setShowPassword((prev) => !prev);
                    }}
                  >
                    {showPassword ? (
                      <GoEye size={25} />
                    ) : (
                      <GoEyeClosed size={25} />
                    )}
                  </div>
                </div>

                <div className="signup_button1">
                  <button>
                    Sign In
                  </button>
                </div>
              </div>
            </form>
            <div className="last_text2">
              *By registering I agree to TIX ID's policies
            </div>
            <div className="last_text3">
              2021 TIX ID - PT Nusantara Elang Sejahtera.
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignupPage;
