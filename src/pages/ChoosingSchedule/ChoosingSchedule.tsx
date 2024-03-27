import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { FcFilmReel } from "react-icons/fc";
import { CiLocationOn } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import DateSlider from "./DateSlider/DateSlider";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import "./ChoosingSchedule.css";
import {
  selectTime,
  setDate,
  setTheatreData,
  setdimension,
  theatreIndex,
  typeIndex,
  resetMovieBooking
} from "../../redux/Slices/movieBookingSlice";
import { Picture } from "../../components/HeroSection/data";
import { DimensionData, TheatreData } from "./theatreData";

const ChoosingSchedule = () => {
  const dispatch = useDispatch();

  const { moviesData } = useSelector((state: any) => state.movies);
  console.log("moviesData", moviesData);
  const { theatreData } = useSelector((state: any) => state.theatre);
  console.log("theatreData", theatreData);

   useEffect(() => {
     dispatch(resetMovieBooking());
   }, []);

  const handleDateSelect = (date: Date) => {
    const formattedDay = date.toLocaleDateString("en-US", { weekday: "long" });
    const formattedDate = date.getDate();
    const formattedMonth = date.toLocaleDateString("en-US", { month: "long" });
    dispatch(
      setDate(`${formattedDay} ${formattedDate} ${formattedMonth}`)
    );
  };

  const [selectedCity, setSelectedCity] = useState("mumbai");
  const [uniquetheatreNames, setuniquetheatreNames] = useState<string[]>([]);
  const [uniqueDimensionNames, setUniqueDimensionNames] = useState<string[]>(
    []
  );
  const [uniquebadgeNames, setuniquebadgeNames] = useState<string[]>([]);

  const uniqueCityNames = [
    ...(new Set(
      theatreData.map((theatre: TheatreData) => theatre.city)
    ) as any),
  ];

  useEffect(() => {
    const filtertheatreNames = theatreData.filter(
      (theatre: TheatreData) => theatre.city === selectedCity
    );
    const theatreNames = [
      ...(new Set(
        filtertheatreNames.flatMap((theatre: TheatreData) => theatre.name)
      ) as any),
    ];
    setuniquetheatreNames(theatreNames);
  }, [theatreData, selectedCity]);

  useEffect(() => {
    const filteredbadgeNames = theatreData.filter(
      (theatre: TheatreData) => theatre.city === selectedCity
    );
    const badgeNames = [
      ...(new Set(
        filteredbadgeNames.flatMap((theatre: TheatreData) => theatre.badge)
      ) as any),
    ];
    setuniquebadgeNames(badgeNames);
  }, [theatreData, selectedCity]);

  useEffect(() => {
    const filteredTheatres = theatreData.filter(
      (theatre: TheatreData) => theatre.city === selectedCity
    );
    const dimensionNames = [
      ...(new Set(
        filteredTheatres.flatMap((theatre: TheatreData) =>
          theatre.dimension.map(
            (dimension: DimensionData) => dimension.dimensionCategory
          )
        )
      ) as any),
    ];
    setUniqueDimensionNames(dimensionNames);
  }, [theatreData, selectedCity]);

  console.log("uniquetheatreNames", uniquetheatreNames);
  console.log("uniqueDimensionNames", uniqueDimensionNames);
  console.log("uniquebadgeNames", uniquebadgeNames);

  const [selectedtheatre, setSelectedtheatre] = useState("");
  const [selectedbadge, setSelectedbadge] = useState("");
  const [selectedDimension, setSelectedDimension] = useState("");

  const filteredTheatreData = theatreData.filter(
    (theatre: TheatreData) =>
      (!selectedCity || theatre.city === selectedCity) &&
      (!selectedtheatre ||
        theatre.name.toLowerCase().includes(selectedtheatre.toLowerCase())) &&
      (!selectedbadge || theatre.badge.includes(selectedbadge)) &&
      (!selectedDimension ||
        theatre.dimension.some(
          (dimension: any) => dimension.dimensionCategory === selectedDimension
        ))
  );

  const [searchParams] = useSearchParams();
  const urlId = searchParams.get("id");
  const parsedUrlId = urlId ? parseInt(urlId, 10) : null;

  console.log(parsedUrlId);

  console.log(moviesData);

  const filteredMovies = urlId
    ? moviesData.filter((movie: Picture) => movie.id === parsedUrlId)
    : [];
  console.log(filteredMovies);

  const { search } = useLocation();
  console.log(search);

  const {
    selecteddimension,
    selectedTime,
    selectedDate,
    selectedTheatre,
    theatre_Index,
    type_Index,
  } = useSelector((state: any) => state.movieBooking);

  const handleDimensionClick = (
    theatre: TheatreData,
    dimension: DimensionData
  ) => {
    dispatch(setTheatreData({ theatre }));
    console.log(theatre);
    dispatch(setdimension(dimension));
  };

  const clearSelectedValues = () => {
    setSelectedbadge("");
    setSelectedDimension("");
  };
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedtheatre(e.target.value);
  };

  return (
    <div>
      <div className="main-con">
        <div className="left-con">
          <div className="se-container">
            <h2 className="se-scheduletitle">Schedule</h2>
            <p className="se-decs">
              Select the schedule of the cinema you want to watch
            </p>
          </div>
          <div className="datepartseaction">
            <DateSlider onDateSelect={handleDateSelect} />
          </div>
          <hr className="hrcsstry" />

          <div className="locationcity">
            <div className="locationicon ">
              <CiLocationOn className="fontsizeset" />
            </div>
            <div className="loactiondropdown">
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="sizeoodropdown"
              >
                {uniqueCityNames.map((city: string, index: number) => (
                  <option key={index} value={city}>
                    {city.charAt(0).toUpperCase() + city.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="all-filter-container">
            <div className="main-con-div-search">
              <div className="searchbar-div">
                <input
                  className="searchbar"
                  type="text"
                  placeholder="Search..."
                  onChange={handleSearchChange}
                />
              </div>
              <div className="searchicon-div">
                <FiSearch className="searchicon" />
              </div>
            </div>

            <div className="threefilter">
              <div>
                <select
                  value={selectedbadge}
                  onChange={(e) => setSelectedbadge(e.target.value)}
                  className="borderremove dropdown-colorset"
                >
                  <option value="">Badge</option>
                  {uniquebadgeNames.map((city: string, index: number) => (
                    <option key={index} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <select
                  value={selectedDimension}
                  onChange={(e) => setSelectedDimension(e.target.value)}
                  className="borderremove dropdown-colorset"
                >
                  <option value="">Dimension</option>
                  {uniqueDimensionNames.map((city: string, index: number) => (
                    <option key={index} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>

              <div onClick={clearSelectedValues} className="clearfilter">
                Clear Filter
              </div>
            </div>
          </div>
          <div className="main-con-slot">
            {filteredTheatreData.map((theatre: any, i: number) => (
              <div key={theatre.id} className="semimain-con">
                <div className="se-theatrename">
                  <div className="se-theatre">
                    <div className="filmeicon-div">
                      <FcFilmReel className="fimeicon" />
                    </div>
                    <div>
                      <p className="theatrename">{theatre.name}</p>
                    </div>
                  </div>
                  <div>
                    <p
                      className={
                        theatre.badge === "CGV"
                          ? "CGV"
                          : theatre.badge === "XXI"
                          ? "XXI"
                          : theatre.badge === "CINEPOLIS"
                          ? "CINEPOLIS"
                          : ""
                      }
                    >
                      {theatre.badge}
                    </p>
                  </div>
                </div>
                <p className="theatreaddress">{theatre.address}</p>
                <div>
                  <div>
                    {theatre.dimension.map(
                      (dimension: DimensionData, index: number) => (
                        <div
                          key={index}
                          onClick={() =>
                            handleDimensionClick(theatre, dimension)
                          }
                        >
                          <p className="dimentiontitile">
                            {dimension.dimensionCategory}{" "}
                          </p>
                          <div className="se-timeslot-div">
                            {dimension.time.map((time: string, idx: number) => (
                              <div
                                key={idx}
                                onClick={() => {
                                  dispatch(selectTime(time));
                                  dispatch(theatreIndex(i.toString()));
                                  dispatch(typeIndex(index.toString()));
                                }}
                                className={`timeslot-border ${
                                  selectedTime === time &&
                                  i === theatre_Index &&
                                  index === type_Index
                                    ? "selected"
                                    : ""
                                }`}
                              >
                                <p className="timenumber">{time}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="right-con">
          <div>
            {filteredMovies.map((movie: Picture) => (
              <div className="splitdatatwopart" key={movie.id}>
                <div>
                  <img
                    src={movie.image}
                    alt="image1"
                    className="se-movieimg"
                  ></img>
                </div>
                <div>
                  <h2 className="se-movietitle">{movie.name}</h2>
                  <div className="movie-details">
                    <div className="category">
                      <ul>
                        <li className="">Tag</li>
                        <li>Duration</li>
                        <li>Director</li>
                        <li>AvgRating</li>
                      </ul>
                    </div>
                    <div className="info">
                      <ul>
                        <li> {movie.tag}</li>
                        <li> {movie.duration}</li>
                        <li> {movie.director}</li>
                        <li> {movie.avgRating}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="rightsidepart00">
            <div className="se-butcon">
          
                  {!selectedDate && !selectedTime && (
                <div className="imageflexset">
                  <h3>Please Select Time And Date</h3>
                  <img
                    src="https://tse2.mm.bing.net/th?id=OIP.LCnUbVbefQF7GrcWqRz2mwHaHa&pid=Api&P=0&h=180"
                    alt="image1"
                    className="imgclass"
                  />
                </div>
              )}
              {!selectedDate && selectedTime && (
                <div className="imageflexset">
                  <h2>Please Select Date</h2>
                  <img
                    src="https://c.ststat.net/content/sites/KnittingAndStitchingShowSpecial/images/icon-date.png"
                    alt="image1"
                    className="imgclass"
                  />
                </div>
              )}
              {selectedDate && !selectedTime && (
                <div className="imageflexset">
                  <h2>Please Select Time</h2>
                  <img
                    src="https://cdn2.iconfinder.com/data/icons/business-office-4/256/Office_Clock-1024.png"
                    alt="image1"
                    className="imgclass"
                  />
                </div>
              )}
              {selectedDate && selectedTime && (
                <div>
                  <h2 className="seatedtheatrename">{selectedTheatre.name}</h2>
                  <p className="selecteddate">{selectedDate}</p>
                  <div className="dimention-and-date">
                    <p>{selecteddimension.dimensionCategory}</p>
                    <p>{selectedTime}</p>
                  </div>
                  <small className="se-but-condition">
                    *Seat selection can be done after this
                  </small>

                  <div className="se-but-div">
                    <button className="se-but-booknow">
                      <Link to={`/choosing-seats`} className="se-Booknow-but">
                        Book Now
                      </Link>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ChoosingSchedule;