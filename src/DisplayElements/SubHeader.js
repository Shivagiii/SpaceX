import React from "react";
import "./SubHeader.css";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";

function SubHeader({setLauncheType,launcheType}) {
  return (
    <div className="subHeader">
      <button className="subHeading-buttons">
        <CalendarTodayOutlinedIcon />
        <div>Past 6 months </div> <KeyboardArrowDownOutlinedIcon />{" "}
      </button>
      <button className="subHeading-buttons">
    
        <label for="launches">
          <FilterAltOutlinedIcon />
        </label>
        <select name="launches" id="launches" className="selectTag" value={launcheType} onChange={(e) => setLauncheType(e.target.value)}>
          <option value="all">All Launches</option>
          <option value="upcoming">Upcoming Launches</option>
          <option value="true">Successful Launches</option>
          <option value="false">Failed Launches</option>
        </select>
     
      </button>
    </div>
  );
}

export default SubHeader;
