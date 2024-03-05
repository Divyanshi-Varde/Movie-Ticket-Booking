import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { setDate } from "../../../redux/Slices/movieBookingSlice";
import { useDispatch } from "react-redux";
import "./DateSlider.css";

interface DateSelectorProps {
  onDateSelect: (date: Date) => void;
}

const DateSelector: React.FC<DateSelectorProps> = ({ onDateSelect }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  const slider = useRef<Slider>(null);
  const [datesOfMonth, setDatesOfMonth] = useState<
    { date: Date; day: string }[]
  >([]);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const dispatch = useDispatch();
  useEffect(() => {
    const currentDate = new Date();
    const endDate = new Date(currentDate.getTime() + 15 * 24 * 60 * 60 * 1000);

    const dates: { date: Date; day: string }[] = [];
    for (
      let date = new Date(currentDate);
      date <= endDate;
      date.setDate(date.getDate() + 1)
    ) {
      const day = date.toLocaleDateString("en-US", { weekday: "short" });
      dates.push({ date: new Date(date), day });
    }

    setDatesOfMonth(dates);
    console.log("dates", dates);

    setSelectedDate(currentDate);
    onDateSelect(currentDate);

    const formattedDay = currentDate.toLocaleDateString("en-US", {
      weekday: "long",
    });
    const formattedDateOfMonth = currentDate.getDate();
    const formattedMonth = currentDate.toLocaleDateString("en-US", {
      month: "long",
    });
    const formattedDate = `${formattedDay} ${formattedDateOfMonth} ${formattedMonth}`;

    dispatch(setDate(formattedDate));

    console.log("Default selected date:", formattedDate);
  }, []);

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    onDateSelect(date);
  };

  return (
    <div className="maincondate">
      <div className="semidiv">
        <div {...settings} className="sliderpart">
          {datesOfMonth.map((dateObj, index) => (
            <div
              key={index}
              className={`eachdate ${
                dateObj.date.getTime() === selectedDate?.getTime()
                  ? "selected"
                  : ""
              }`}
              onClick={() => handleDateClick(dateObj.date)}
            >
              <div className="monthdate">
                {dateObj.date.getDate()}{" "}
                {dateObj.date.toLocaleDateString("en-US", { month: "short" })}
              </div>
              <div className="dateday">{dateObj.day}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DateSelector;
