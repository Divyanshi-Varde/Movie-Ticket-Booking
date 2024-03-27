import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import {
  setSignupclearn_value,
  setSignup,
} from "../../redux/Slices/signupSlice";
import { setLogin, setloginClean_value } from "../../redux/Slices/loginSlice";

const Profile = () => {
  const usenavigate = useNavigate();
  const dispatch = useDispatch();
  const { fname, email, phone, password } = useSelector(
    (state: any) => state.signup
  );

  const handleClick = () => {
    dispatch(setSignup(false));
    dispatch(setLogin(false));
    dispatch(setloginClean_value());
    dispatch(setSignupclearn_value());
    usenavigate("/");
  };

  return (
    <div>
      <Navbar />
      <div>{fname && <div>{fname.charAt(0).toUpperCase()}</div>}</div>
      <div>
        {fname && <div>Name : {fname}</div>}
        {email && <div>Email : {email}</div>}
        {phone && <div>Phone : {phone}</div>}
        {password && <div>Password : {password}</div>}
        <div>
          <div onClick={handleClick}>Log Out</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
