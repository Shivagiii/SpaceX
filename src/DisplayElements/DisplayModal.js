import React, { useEffect, useState } from "react";
import "./DisplayModal.css";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import HandleDateRange from "./HandleDateRange";



function DisplayModal({ selectedRow, handleClose, date,dateS, setDate }) {
  



  return (
    <div>
      <div id="myModal" className="modal">
        <div className="modal-content">
          <span className="close" onClick={handleClose}>
            &times;
          </span>

          <div className="modalHeader">
            <img
              src={selectedRow.links && selectedRow.links.mission_patch_small}
              alt={selectedRow.mission_name}
            />
            <div className="insideModalHeader">
              <div className="missionName">
                {selectedRow.mission_name}{" "}
                <div
                  className={
                    selectedRow.upcoming
                      ? `upcoming chipS`
                      : selectedRow.launch_success
                      ? `success chipS`
                      : `failure chipS`
                  }
                >
                  {selectedRow.upcoming
                    ? `Upcoming`
                    : selectedRow.launch_success
                    ? `Success`
                    : `Failure`}
                </div>
              </div>
              <div className="rocketName">
                {selectedRow.rocket && selectedRow.rocket.rocket_name}
              </div>
              <div></div>
            </div>
          </div>
          <div className="modalContent">
            {selectedRow.details}{" "}
            <a
              target="_blank"
              href={selectedRow.links && selectedRow.links.wikipedia}
            >
              Wikipedia
            </a>
          </div>
          <TableContainer component={Paper} sx={{ boxShadow: "none" }}>
            <Table aria-label="simple table">
              <TableBody>
                <TableRow className="row">
                  <TableCell align="left" padding="1px">
                    Flight Number
                  </TableCell>
                  <TableCell align="left" padding="1px">
                    {selectedRow.flight_number}
                  </TableCell>
                </TableRow>
                <TableRow align="right" className="row">
                  <TableCell align="left">Mission Name</TableCell>
                  <TableCell align="left">{selectedRow.mission_name}</TableCell>
                </TableRow>
                <TableRow align="right" className="row">
                  <TableCell align="left">Rocket Type</TableCell>
                  <TableCell align="left">
                    {selectedRow.rocket && selectedRow.rocket.rocket_type}
                  </TableCell>
                </TableRow>
                <TableRow align="right" className="row">
                  <TableCell align="left">Rocket Name</TableCell>
                  <TableCell align="left">
                    {selectedRow.rocket && selectedRow.rocket.rocket_name}
                  </TableCell>
                </TableRow>
                <TableRow align="right" className="row">
                  <TableCell align="left">Manufacturer</TableCell>
                  <TableCell align="left">
                    {selectedRow.rocket &&
                      selectedRow.rocket.second_stage.payloads[0].manufacturer}
                  </TableCell>
                </TableRow>
                <TableRow align="right" className="row">
                  <TableCell align="left">Nationality</TableCell>
                  <TableCell align="left">
                    {selectedRow.rocket &&
                      selectedRow.rocket.second_stage.payloads[0].nationality}
                  </TableCell>
                </TableRow>
                <TableRow align="right" className="row">
                  <TableCell align="left">Launch Date</TableCell>
                  <TableCell align="left">{date}</TableCell>
                </TableRow>
                <TableRow align="right" className="row">
                  <TableCell align="left">Payload Type</TableCell>
                  <TableCell align="left">
                    {selectedRow.rocket &&
                      selectedRow.rocket.second_stage.payloads[0].payload_type}
                  </TableCell>
                </TableRow>
                <TableRow align="right" className="row">
                  <TableCell align="left">Orbit</TableCell>
                  <TableCell align="left">
                    {selectedRow.rocket &&
                      selectedRow.rocket.second_stage.payloads[0].orbit}
                  </TableCell>
                </TableRow>
                <TableRow align="right" className="row">
                  <TableCell align="left">Launch Site</TableCell>
                  <TableCell align="left">
                    {selectedRow.launch_site &&
                      selectedRow.launch_site.site_name}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
      <div id="myModal2" className="modal">
        <div className="modal-content-date">
          <HandleDateRange dateS={dateS} setDate={setDate} />
        </div>
      </div>
    </div>
  );
}

export default DisplayModal;
