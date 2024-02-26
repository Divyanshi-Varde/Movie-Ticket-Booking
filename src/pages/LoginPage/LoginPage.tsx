import React, { useState, ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import { GoEye, GoEyeClosed } from "react-icons/go";
import toast from "react-hot-toast";
import "./LoginPage.css";

interface LoginPageProps {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

interface FormData {
  phone: string;
  password: string;
}

const LoginPage: React.FC<LoginPageProps> = ({ isLoggedIn, setIsLoggedIn }) => {
  const [formData, setFormData] = useState<FormData>({
    phone: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const navigate = useNavigate();

  function clickHandler() {
    navigate("/signup");
  }

  console.log(formData);

  function changeHandler(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function submitHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // setIsLoggedIn(true);
    toast.success("Logged In");
    navigate("/");
    console.log("login page ma login thyu? :", isLoggedIn);
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

        <form onSubmit={submitHandler}>
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
                onChange={changeHandler}
                value={formData.phone}
                placeholder="+91 | Enter Mobile Number"
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
                type={showPassword ? "text" : "password"}
                onChange={changeHandler}
                value={formData.password}
                placeholder="Enter Password"
              />
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
              <button
                onClick={() => {
                  setIsLoggedIn(true);
                }}
              >
                Login Now
              </button>
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
