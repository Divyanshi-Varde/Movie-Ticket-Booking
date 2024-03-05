import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import ChoosingSchedule from "./ChoosingSchedule";
import Footer from "../../components/Footer/footer";

const MainPage:React.FC<{isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>}> = ({ isLoggedIn, setIsLoggedIn}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Choosing Schedule";
  }, []);
  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <ChoosingSchedule />
      <hr />
      <Footer />
    </div>
  );
};

export default MainPage;
