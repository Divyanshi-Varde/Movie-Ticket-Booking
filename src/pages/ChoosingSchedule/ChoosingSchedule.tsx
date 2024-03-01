import React from "react"
import Navbar,{NavbarProps} from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/footer"
import { LuMapPin } from "react-icons/lu";

const ChoosingSchedule:React.FC<NavbarProps> = ({ isLoggedIn, setIsLoggedIn }) => {
  return (
    <div>
      <div>
        <Navbar setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
      </div>
      <div className="schedule_container">
        <div className="schedule_heading">TIMETABLE</div>
        <div className="schedule_subheading">
          Select the schedule of the cinema you want to watch
        </div>
        <div className="date_selector">
          <div>15 Dec Mon</div>
          <div>16 Dec Tue</div>
          <div>17 Dec Wed</div>
          <div>18 Dec Thu</div>
          <div>19 Dec Fri</div>
        </div>
        <div className="divider">
          <hr />
        </div>
      </div>
      <div className="choosing_location">
        <div className="map_icon">
          <LuMapPin />
        </div>
        <div className="schedule_dropDown">
          <select>
            <option className="dropDown_values">Surat</option>
            <option className="dropDown_values">Vadodara</option>
            <option className="dropDown_values">Ankleshwar</option>
            <option className="dropDown_values">Valia</option>
          </select>
        </div>
      </div>

      <div className="schedule_dropDown2">

      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default ChoosingSchedule;
