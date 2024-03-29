import React from "react";
import image1 from "./Images/Clapperboard.png";
import image2 from "./Images/Movie Roll.png";
import "./PaymentSuccessPage.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/footer";
import { useNavigate } from "react-router-dom";

const PaymentSuccessPage: React.FC = () => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("/my-ticket");
  };
  return (
    <div>
      <Navbar />
      <div className="paymentSuccess_container">
        <div className="paymentSuccess_heading">
          <h1>Payment successful!</h1>
        </div>
        <div className="paymentSuccess_icons">
          <img
            className="paymentSuccess_image1"
            src={image1}
            alt="clapper-board"
          />
          <img
            className="paymentSuccess_image2"
            src={image2}
            alt="movie-roll"
          />
        </div>
        <div className="paymentSuccess_paragraph">
          <p>
            Transaction details have been sent to your email, you can also check
            other ticket details in my ticket either on the website or on your
            smartphone.
          </p>
        </div>
        <div className="myTicket_button">
          <button onClick={clickHandler}>My Ticket</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PaymentSuccessPage;
