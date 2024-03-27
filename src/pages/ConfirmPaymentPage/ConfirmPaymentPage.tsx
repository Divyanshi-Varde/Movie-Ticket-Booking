import React, { useState } from "react";
import Navbar, { NavbarProps } from "../../components/Navbar/Navbar";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IoArrowBack } from "react-icons/io5";
import toast from "react-hot-toast";
import {
  setdiscount,
  resetDiscount,
  setFinalPrice,
} from "../../redux/Slices/movieBookingSlice";
import "./ConfirmPaymentPage.css";

const ConfirmPaymentPage: React.FC= () => {

  const {
    selectedMovie,
    selectedDate,
    selecteddimension,
    selectedTime,
    selectseat,
    selectedtotal,
    selectdiscount,
    selectfinalprice,
  } = useSelector((state: any) => state.movieBooking);
  const length: number = selectseat.length;

  const dispatch = useDispatch();
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState<number | null>(null);
  //   const [showFinalPrice, setShowFinalPrice] = useState(false);

  const applyPromo = () => {
    const upperCasePromoCode: string = promoCode.toUpperCase();

    const promoCodeMap: { [key: string]: number } = {
      SAVE200: 200,
    };

    let appliedDiscount: number = 0;
    if (
      upperCasePromoCode in promoCodeMap &&
      selectedtotal > promoCodeMap[upperCasePromoCode]
    ) {
      appliedDiscount = promoCodeMap[upperCasePromoCode];
    } else {
      if (!(upperCasePromoCode in promoCodeMap)) {
        toast.error("Invalid promo code!");
      } else {
        toast.error(
          `Total Price Must be above ${promoCodeMap[upperCasePromoCode]} rs`
        );
      }
    }
    dispatch(setdiscount(appliedDiscount));
    setDiscount(appliedDiscount);
  };

React.useEffect(() => {
  let firstPrice =
    selectedtotal  - (selectdiscount !== null ? selectdiscount : 0);
  if (!isNaN(firstPrice)) {
    dispatch(setFinalPrice(firstPrice));
  }
}, [selectedtotal, selectdiscount]);

  const navigate = useNavigate();
  const gotobackpage = () => {
    navigate(-1);
  };

  return (
    <div>
      <Navbar  />
      <div>
        <div>
          <h3 className="backfunction" onClick={gotobackpage}>
            <IoArrowBack />
            BACK
          </h3>
        </div>

        <div className="confirm-main-con">
          <div className="confirm-left">
            <h3 className="confirmtitle">Schedule Details</h3>

            <p className="alltitle">Movie Title</p>
            <h4 className="allans">{selectedMovie.name}</h4>
            <hr className="hrcss" />
            <p className="alltitle">Date</p>
            <h4 className="allans">{selectedDate}</h4>
            <hr className="hrcss" />
            <div className="datetimepart">
              <div>
                <p className="alltitle mar">Class</p>
                <h4 className="allans mar">
                  {selecteddimension.dimensionCategory}
                </h4>
              </div>
              <div className="classtime">
                <p className="alltitle mar">Time</p>
                <h4 className="allans mar">{selectedTime}</h4>
              </div>
            </div>
            <hr className="hrcss" />
            <p className="alltitle">Tickets({selectseat.length})</p>
            <h4 className="allans">{selectseat.join(",  ")}</h4>
            <hr className="hrcss" />
          </div>
          <div className="confirm-left rightsidepart">
            <h1 className="confirmtitle">Order Summary</h1>
            <h4 className="margremove">Transaction Details</h4>
            <div className="ticketprice ">
              <p className="mar alltitle">REGULAR SEAT</p>
              <h3 className="mar">
                ₹{selecteddimension.price} <span>X</span> {length}
              </h3>
            </div>
            <hr className="hrcss center" />
            <div className="rightsidesecond-part">
              <p className="alltitle">Promos & Vouchers</p>

              {selectdiscount ? (
                <input
                  type="text"
                  value={selectdiscount}
                  disabled
                  className="inputfield"
                />
              ) : (
                <input
                  type="text"
                  placeholder="Enter Promos Code"
                  value={promoCode}
                  className="inputfield"
                  onChange={(e) => setPromoCode(e.target.value)}
                />
              )}
              {selectdiscount !== null &&
              selectdiscount > 0 &&
              selectedtotal > 100 ? (
                <button
                  onClick={() => {
                    dispatch(resetDiscount());
                  }}
                  className="applybut"
                >
                  Remove Promo
                </button>
              ) : (
                <button onClick={applyPromo} className="applybut">
                  Apply
                </button>
              )}
              {selectdiscount !== null &&
                selectdiscount > 0 &&
                selectedtotal > 100 && (
                  <div>
                    <p className="applydiscount">
                      Applied {selectdiscount}rs discount!
                    </p>
                    <div className="ticketprice hightset">
                      <p>Discount</p>
                      <h3>₹ {selectdiscount}</h3>
                    </div>
                  </div>
                )}
            </div>
            <hr className="hrcss center" />
            <div className="lastpayment-div ticketprice">
              <h2 className="totalpay">Total Pay </h2>
              <h3>₹ {selectfinalprice ?? 0}</h3>
            </div>
            <div className="but-main-con">
              <div className="butnowbutton">
                <NavLink to={"/payment-successful"} className="buynow">
                  BUY TICKETS
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ConfirmPaymentPage;
