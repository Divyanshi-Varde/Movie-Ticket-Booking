import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "../../components/Navbar/Navbar";
import { SlLocationPin } from "react-icons/sl";
import "./MyTicketPage.css";
// import { ticketEntry } from "../../redux/Slices/userTicketSlice";

const MyTicketPage: React.FC = () => {
  const tickets = useSelector((state: any) => state.myTicket.tickets);

  return (
    <div>
      <Navbar />
      <div className="mamovie-main-div">
        <div className="mymovies">
          <h1 className="mytitle">My Ticket</h1>
          <p className="moviedesc">
            List of tickets and transactions you have made
          </p>
          <div>
            {tickets.map((ticket: any, index: number) => (
              <div key={index}>
                <Link to={`/my-ticket/${index}`}>
                  <div className="main-details">
                    <div className="my-div-img">
                      <img
                        src={ticket.movie.image}
                        className="my-img"
                        alt={ticket.movie.name}
                      />
                    </div>
                    <div className="moviedetails-right">
                      <h2 className="blackcolor moviename">
                        {ticket.movie.name}
                      </h2>
                      <p className="blackcolor textsize">
                        <span>{ticket.date}</span>
                        <span className="textsize">{ticket.time}</span>
                      </p>
                      <p>
                        <SlLocationPin className="lightcolor textsize" />{" "}
                        <span className="lightcolor textsize">
                          {ticket.theater.name}
                        </span>{" "}
                        (
                        <span className="blackcolor textsize">
                          {ticket.dimension.dimensionCategory}
                        </span>
                        )
                      </p>
                    </div>
                  </div>
                </Link>
                {index !== tickets.length - 1 && <hr />}
              </div>
            ))}
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default MyTicketPage;

// import React from "react";
// import { Link } from "react-router-dom";
// import { RootState } from "../../redux/Stores/store";
// import { useSelector } from "react-redux";
// import Navbar from "../../components/Navbar/Navbar";
// import { SlLocationPin } from "react-icons/sl";
// import "./MyTicketPage.css";

// const MyTicketPage: React.FC<{
//   isLoggedIn: boolean;
//   setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
// }> = ({ isLoggedIn, setIsLoggedIn }) => {
//   // const navigate = useNavigate();
//   const tickets = useSelector((state: RootState) => state.myTicket.tickets);

//   return (
//     <div>
//       <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
//       <div className="mamovie-main-div">
//         <div className="mymovies">
//           <h1 className="mytitle">My Ticket</h1>
//           <p className="moviedesc">
//             List of tickets and transactions you have made
//           </p>
//           <div>
//             {tickets.map((ticket: any, index: number) => (
//               <div key={index}>
//                 <Link to={`/my-ticket`}>
//                   <div className="main-details">
//                     <div className="my-div-img">
//                       <img src={ticket.movie.image} className="my-img" />
//                     </div>
//                     <div className="moviedetails-right">
//                       <h2 className="blackcolor moviename ">
//                         {ticket.movie.name}
//                       </h2>
//                       <p className="blackcolor textsize">
//                         <span>{ticket.date}</span>
//                         <span className="textsize">{ticket.time}</span>
//                       </p>
//                       <p>
//                         <SlLocationPin className="lightcolor textsize" />{" "}
//                         <span className="lightcolor textsize">
//                           {ticket.theater.name}
//                         </span>
//                         (
//                         <span className="blackcolor textsize">
//                           {ticket.dimension.dimensionCategory}
//                         </span>
//                         )
//                       </p>
//                     </div>
//                   </div>
//                 </Link>
//                 {index !== tickets.length - 1 && <hr />}
//               </div>
//             ))}
//           </div>
//           <hr />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MyTicketPage;
