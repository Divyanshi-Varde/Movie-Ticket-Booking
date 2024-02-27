import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaRegBell } from "react-icons/fa";
import { RxDividerVertical } from "react-icons/rx";
import logo from "./Images/tix id 1.png";
import "./Navbar.css";

export interface NavbarProps {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<NavbarProps> = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();

  function clickHandler() {
    navigate("/signup");
  }

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
              <div className="navbar-right-data">My Ticket</div>
              <Link to="/news" className="navbar-right-data">
                <div>TIX ID News</div>
              </Link>
              {!isLoggedIn && (
                <Link className="vertical_line" to="/">
                  <div>
                    <RxDividerVertical size={40} />
                  </div>
                </Link>
              )}
              <div className="navbar-right-data bell-icon">
                <FaRegBell size={25} />
              </div>
              {!isLoggedIn && (
                <>
                  <Link className="navbar-button" to="/signup">
                    <button className="signin_button" onClick={clickHandler}>
                      Sign Up
                    </button>
                  </Link>
                  <Link className="navbar-button" to="/login">
                    <button className="logging_in_button">Login</button>
                  </Link>
                </>
              )}
              {isLoggedIn && (
                <Link className="navbar-button" to="/">
                  <div className="navbar-right-data user-logo">D</div>
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
