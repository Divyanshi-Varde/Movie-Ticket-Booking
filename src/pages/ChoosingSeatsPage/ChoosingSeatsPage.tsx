

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { ticketEntry } from "../../redux/Slices/userTicketSlice";
import {
  selectTime,
  setSeat,
  setTotal,
} from "../../redux/Slices/movieBookingSlice";
import "./ChoosingSeatsPage.css";

const ChoosingSeatsPage: React.FC = () => {
  const {
    selecteddimension,
    selectedtotal,
    selectseat,
  } = useSelector((state: any) => state.movieBooking);

  const { tickets } = useSelector((state: any) => state.myTicket);
  console.log("ticket", tickets);

  const ticketDetails: [string, string, string][] = [];

  tickets.forEach((ticket: ticketEntry) => {
    const details: any = [
      ticket.time,
      ticket.dimension.dimensionCategory,
      ticket.date,
    ];
    ticketDetails.push(details);
  });

  console.log("Ticket Details:", ticketDetails);

  const dispatch = useDispatch();

  const [totalPrice, setTotalPrice] = useState(0);

  const handleSeatClick = (seat: string) => {
    const currentSeats = Array.isArray(selectseat) ? selectseat : [];
    if (currentSeats.includes(seat)) {
      const updatedSeats = currentSeats.filter((s: string) => s !== seat);
      dispatch(setSeat(updatedSeats));
    } else if (currentSeats.length < 5) {
      const updatedSeats = [...currentSeats, seat];
      dispatch(setSeat(updatedSeats));
    } else {
      const updatedSeats = [...currentSeats.slice(1), seat];
      dispatch(setSeat(updatedSeats));
    }
  };

  const navigate = useNavigate();
  const checkseatseleted = () => {
    if (selectseat.length === 0) {
      toast.error("Please Select any seat");
      return;
    } else {
      toast.success("The seat has been selected");
      navigate(`/confirm-payment`);
    }
  };

  const isSeatSelected = (seat: string) => {
    return Array.isArray(selectseat) ? selectseat.includes(seat) : false;
  };

  const calculateTotalPrice = () => {
    if (!selecteddimension || !selectseat) return 0;

    const pricePerSeat = selecteddimension.price;
    const totalPrice = selectseat.length * pricePerSeat;
    return totalPrice;
  };

   React.useEffect(() => {
     dispatch(setSeat([]));
   }, []);

  React.useEffect(() => {
    const newTotalPrice = calculateTotalPrice();
    setTotalPrice(newTotalPrice);

    dispatch(setTotal(newTotalPrice));
  }, [selectseat]);

  // dispatch(setTotal(totalPrice));
  const [selectedValue, setSelectedValue] = useState("");
  const handleDropdownChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedOption = event.target.value;
    setSelectedValue(selectedOption);
    dispatch(selectTime(selectedOption));
  };

  const options = selecteddimension.time;

  return (
    <div>
      <div>
        <div className="seatpage-heading">
          <div>
            <h2 className="seatpage-h-h">SELECT A SEAT</h2>
          </div>
          <div>
            <p className="seatpage-h-p">
              Choose the seat you will occupy during the film screening
            </p>
          </div>
        </div>
      </div>
      <div className="selecttime">
        <select
          value={selectedValue}
          onChange={handleDropdownChange}
          className="selectt"
        >
          {options.map((option: string, index: number) => (
            <option key={index} value={option} className="each-time-box">
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="seat-page">
        <div className="seat-map">
          {[...Array(8)].map((_, rowIndex) => (
            <div key={rowIndex} className="seat-row">
              {[...Array(20)].map((_, colIndex) => {
                const seat = `${String.fromCharCode(65 + rowIndex)}${
                  colIndex + 1
                }`;
                const isSelected = isSeatSelected(seat);
                return (
                  <div
                    key={colIndex}
                    className={`seat ${isSelected ? "selected" : ""}`}
                    onClick={() => handleSeatClick(seat)}
                  >
                    {seat}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      <div className="seatpage-main-screen">
        <div className="seatpage-layout-text">
          <h3>Cinema Screen Here</h3>
        </div>
      </div>

      <div className="totalprice-button-section">
        <div className="totalprice-sets">
          <div className="totalprice">
            <div className="total">
              <h4 className="marginremove">Total : </h4>
            </div>
            <div className="totalprice ">
              <h3 className="marginremove">₹{selectedtotal}</h3>
            </div>
          </div>
        </div>
        <div className="seatsection">
          <div className="total">
            <h4 className="marginremove">Selected Seats : </h4>
          </div>
          <div className="totalprice">
            <h3 className="marginremove">{selectseat.join(",  ")} </h3>
          </div>
        </div>

        <div className="button-book">
          <div onClick={() => navigate(-1)} className="but but-1">
            BACK
          </div>
          <div onClick={checkseatseleted} className="but but-1">
            CONFIRMATION
          </div>
        </div>
      </div>
    </div>
  );
};
export default ChoosingSeatsPage;
