import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import NewsPage from "./pages/NewsPage/NewsPage";
import ComingSoonPage from "./pages/ComingSoonPage/ComingSoonPage";

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <HomePage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          }
        />
        <Route
          path="/login"
          element={
            <LoginPage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          }
        />
        <Route
          path="/signup"
          element={
            <SignupPage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          }
        />
        <Route
          path="/news"
          element={
            <NewsPage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          }
        />
        <Route
          path="/upcoming"
          element={
            <ComingSoonPage
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
