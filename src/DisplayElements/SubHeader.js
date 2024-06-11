import React, { useState } from "react";
import "./SubHeader.css";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import DisplayModal from "./DisplayModal";

function SubHeader({setLauncheType,launcheType,dateS}) {
  const [open,setModalOpen] = useState(false);
  function openDateModal(){
    console.log("clickedd");
    document.getElementById('myModal2').style.display='flex';
    setModalOpen(true);
  }
 
  return (
    <div className="subHeader">
      <button className="subHeading-buttons" onClick={openDateModal}>
        <CalendarTodayOutlinedIcon />
        <div>{dateS[0].label} </div> <KeyboardArrowDownOutlinedIcon />{" "}
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
