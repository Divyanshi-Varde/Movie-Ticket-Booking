import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
// import { Formik,Form,Field } from "formik"
import { GoEye, GoEyeClosed } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "./SignupPage.css";

interface FormData {
  fname: string;
  phone: string;
  email: string;
  password: string;
}

interface SignupPageProps {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

// function validateEmail(value: any) {
//   let error;
//   if (!value) {
//     error = "Required";
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
//     error = "Invalid email address";
//   }
//   return error;
// }

const SignupPage: React.FC<SignupPageProps> = ({
  isLoggedIn,
  setIsLoggedIn,
}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    fname: "",
    phone: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleReturn = () => {
    setCurrentPage(1);
  };

  const handleClick = () => {
    navigate("/");
  };

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoggedIn(true);
    toast.success("Logged In");
    navigate("/");
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
                  onChange={changeHandler}
                  placeholder="Enter Full Name"
                  value={formData.fname}
                />
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
                  onChange={changeHandler}
                  placeholder="+91 | Enter Mobile Number"
                  value={formData.phone}
                />
              </div>

              <button
                onClick={() => setCurrentPage(2)}
                className="continue_button"
              >
                Continue
              </button>
            </div>
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

            <form onSubmit={submitHandler}>
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
                    value={formData.email}
                    onChange={changeHandler}
                    placeholder="Enter Email"
                    // validate={validateEmail}
                  />
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
                    value={formData.password}
                    onChange={changeHandler}
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter Password"
                  />
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
                  <button
                    onClick={() => {
                      setIsLoggedIn(true);
                    }}
                  >
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
