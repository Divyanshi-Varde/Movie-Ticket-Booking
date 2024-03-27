import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaRegBell } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/Stores/store";
import { RxDividerVertical } from "react-icons/rx";
import logo from "./Images/tix id 1.png";
import "./Navbar.css";

export interface NavbarProps {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  function clickHandler() {
    navigate("/signup");
  }

  const loginState = useSelector((state: RootState) => state.login.loginState);
  const signupState = useSelector(
    (state: RootState) => state.signup.signupState
  );

  console.log("Login State:", loginState);
  console.log("Signup State:", signupState);

  const loginname = useSelector((state: RootState) => state.login.phone);
  const signupname = useSelector((state: RootState) => state.signup.fname);

  return (
    <div className="wrapper">
      <section>
        <div className="container">
          <div className="navbar">
            <div className="navbar-left">
              <img src={logo} alt="TIX ID" />
            </div>

            <div className="navbar-right">
              <Link to="/" className="navbar-right-data">
                <div>Home</div>
              </Link>
              <Link to="/my-ticket" className="navbar-right-data">
                <div>My Ticket</div>
              </Link>
              <Link to="/news" className="navbar-right-data">
                <div>TIX ID News</div>
              </Link>
              <div className="navbar-right-data bell-icon">
                <FaRegBell size={25} />
              </div>

              {loginState || signupState ? (
                <div>
                  {loginState ? (
                    <Link className="navbar-button" to="/user-profile">
                      <div className="navbar-right-data user-logo">
                        {loginname && loginname.charAt(0).toUpperCase()}
                      </div>
                    </Link>
                  ) : (
                    <Link className="navbar-button" to="/user-profile">
                      <div className="navbar-right-data user-logo">
                        {signupname && signupname.charAt(0).toUpperCase()}
                      </div>
                    </Link>
                  )}
                </div>
              ) : (
                <div className="before-login">
                  <Link className="vertical_line" to="/">
                    <div>
                      <RxDividerVertical size={40} />
                    </div>
                  </Link>
                  <Link className="navbar-button" to="/signup">
                    <button className="signin_button" onClick={clickHandler}>
                      Sign Up
                    </button>
                  </Link>

                  <Link className="navbar-button" to="/login">
                    <button className="logging_in_button">Login</button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
