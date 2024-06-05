import React from "react";
import "./DisplayTable.css";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

function DisplayTable({ displayData }) {
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
    console.log(d.getDate(), month[d.getMonth()]);
    return dateString;
  };

  return (
    <div className="border displayBox">
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
          <TableBody>
            {displayData.map((row) => (
              <TableRow
                key={row.flight_number}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  height: "10%",
                }}
              >
                <TableCell className="row">{row.flight_number}</TableCell>
                <TableCell className="row">
                  {createDate(row.launch_date_utc)}
                </TableCell>
                <TableCell className="row">
                  {row.launch_site.site_name}
                </TableCell>
                <TableCell className="row">{row.mission_name}</TableCell>
                <TableCell className="row">
                  {row.rocket.second_stage.payloads[0].orbit}
                </TableCell>
                <TableCell className="row">
                  {row.launch_success ? `Success` : `Failure`}
                </TableCell>
                <TableCell className="row">{row.rocket.rocket_name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default DisplayTable;
