import React from "react";
import "./DisplayTable.css";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from "@mui/material";
import DisplayModal from "./DisplayModal";

function DisplayTable({ displayData,setSelectedRow,selectedRow,dateS, setDate }) {
 
  
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const createDate = (date) => {
    const d = new Date(date);
    const dateString =
      (d.getUTCDate() < 10 ? "0" : "") +
      d.getUTCDate() +
      " " +
      month[d.getMonth()] +
      " " +
      d.getFullYear() +
      " " +
      (d.getHours() < 10 ? "0" : "") +
      d.getHours() +
      ":" +
      (d.getMinutes() < 10 ? "0" : "") +
      d.getMinutes();

    return dateString;
  };

  function handleModal(row) {
    console.log("clicked");
    document.getElementById('myModal').style.display='flex';
    setSelectedRow(row);
    

    
  }
  function handleClose() {
    console.log("...");
    document.getElementById('myModal').style.display='none';
    
    

    
  }
  
 
  const TableData = ({ row,ind }) => {
    
      return (
        <TableRow
          key={row.mission_name}
          sx={{
            "&:last-child td, &:last-child th": { border: 0 },
          }}
          id={row.flight_number}
          onClick={() => handleModal(row)}
        >
         
        
      
          <TableCell className="row">{row.flight_number}</TableCell>
          <TableCell className="row">
            {createDate(row.launch_date_utc)}
          </TableCell>
          <TableCell className="row">{row.launch_site.site_name}</TableCell>
          <TableCell className="row">{row.mission_name}</TableCell>
          <TableCell className="row">
            {row.rocket.second_stage.payloads[0].orbit}
          </TableCell>
          <TableCell className="chipRow ">
            <div
              className={
                row.upcoming
                  ? `upcoming chip`
                  : row.launch_success
                  ? `success chip`
                  : `failure chip`
              }
            >
              {row.upcoming
                ? `Upcoming`
                : row.launch_success
                ? `Success`
                : `Failure`}
            </div>
          </TableCell>
          <TableCell className="row">{row.rocket.rocket_name}</TableCell>
        </TableRow>
      );
  };

  return (
    <div className=" displayBox">
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead sx={{ background: "#F4F5F7", height: 40 }}>
            <TableRow>
              <TableCell className="headRow">No:</TableCell>
              <TableCell className="headRow">Launched(UTC)</TableCell>
              <TableCell className="headRow">Location</TableCell>
              <TableCell className="headRow">Mission</TableCell>
              <TableCell className="headRow">Orbit</TableCell>
              <TableCell className="headRow">Launch Status</TableCell>
              <TableCell className="headRow">Launch Status</TableCell>
            </TableRow>
          </TableHead>
          <DisplayModal  handleClose={handleClose} 
          selectedRow={selectedRow} 
          date={createDate(selectedRow.launch_date_utc)  }
            dateS={dateS}
            setDate={setDate}/>
          <TableBody>
            {   
            
            displayData.map((row) => (
              
              <TableData row={row}  key={row.mission_name} id={row.flight_number}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
       
    </div>
  );
}

export default DisplayTable;
