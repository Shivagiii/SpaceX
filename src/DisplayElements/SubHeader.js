import React from "react";
import "./SubHeader.css";
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';


function SubHeader() {
  return (
    <div className="subHeader">
      <button className="subHeading-buttons">
        <CalendarTodayOutlinedIcon />
        <div>Past 6 months </div> <KeyboardArrowDownOutlinedIcon />{" "}
      </button>
      <button className="subHeading-buttons">
        <FilterAltOutlinedIcon />
        <div>All Launches</div> <KeyboardArrowDownOutlinedIcon />
      </button>
    </div>
  );
}

export default SubHeader;
