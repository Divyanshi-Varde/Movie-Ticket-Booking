import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { showMoviesData } from "./redux/Thunk/movieDataThunk";
import { showTheatreData } from "./redux/Thunk/theatreDataThunk";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import NewsPage from "./pages/NewsPage/NewsPage";
import ComingSoonPage from "./pages/ComingSoonPage/ComingSoonPage";
import MainPage from "./pages/ChoosingSchedule/MainPage";
import UserProfilePage from "./pages/UserProfilePage/UserProfilePage";
import PaymentSuccessPage from "./pages/PaymentSuccessPage/PaymentSuccessPage";
import ChoosingSeatsPage from "./pages/ChoosingSeatsPage/ChoosingSeatsPage";
import ConfirmPaymentPage from "./pages/ConfirmPaymentPage/ConfirmPaymentPage";
import MyTicketPage from "./pages/MyTicketPage/MyTicketPage";
import { setMovieData, setTheatreData } from "./redux/Slices/movieBookingSlice";
import PrivateRoute from "./components/PrivateRoute";

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showMoviesData() as any);
    dispatch(showTheatreData() as any);
    dispatch(setMovieData as any);
    dispatch(setTheatreData as any);
  });
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route
          path="/news"
          element={
            <PrivateRoute>
              <NewsPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/upcoming"
          element={
            <PrivateRoute>
              <ComingSoonPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/choosing-schedule"
          element={
            <PrivateRoute>
              <MainPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/choosing-seats"
          element={
            <PrivateRoute>
              <ChoosingSeatsPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/user-profile"
          element={
            <PrivateRoute>
              <UserProfilePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/confirm-payment"
          element={
            <PrivateRoute>
              <ConfirmPaymentPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/payment-successful"
          element={
            <PrivateRoute>
              <PaymentSuccessPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/my-ticket"
          element={
            <PrivateRoute>
              <MyTicketPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
