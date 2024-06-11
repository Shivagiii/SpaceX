import "./App.css";
import { useEffect, useState } from "react";
import DisplayTable from "./DisplayElements/DisplayTable";
import SubHeader from "./DisplayElements/SubHeader";
import Pagination from "@mui/material/Pagination";
import axios from "axios";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css';


function App() {
  const [dataD, setData] = useState([]);
  const [displayData, setDisplayData] = useState([]);
  const [launcheType, setLauncheType] = useState("");
  const [selectedRow, setSelectedRow] = useState("");
  const [pageNo, setPageNo] = useState(1);
  const [dateS, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(), // Use null if you don't want to have endDate
      key: "selection",
      label:"Past 6 Months"
    },
  ]);

  async function fetchData(launcheType) {
    let url = "https://api.spacexdata.com/v3/launches/";

    if (launcheType === "upcoming") url = url + launcheType;
    let newData = [];
    try {
      const { data } = await axios.get(url);
      setData(data);
      // Added logic to filter data according to launch type
      if (launcheType === "true") {
        newData = data.filter((row) => row.launch_success === true);
        setData(newData);
      } else if (launcheType === "false") {
        newData = data.filter((row) => row.launch_success === false);
        setData(newData);
      } else newData = data.filter((d, indx) => indx >= 0 && indx < 10);
      setDisplayData(newData);
    } catch (e) {
      console.error(e);
      alert("failed to fetch data");
    }
  }

  function displayDatas(data) {  //function to add pagination and calculate the next number of rows
    let end = 1;

    end = pageNo * 10;
    let start = end - 10;
    const newDataa = data.filter((d, indx) => indx >= start && indx < end);
    setDisplayData(newDataa);

  }
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchData(launcheType);
    setPageNo(1);
  }, [launcheType]);

  useEffect(() => {
    displayDatas(dataD);
  }, [pageNo, dataD]);
  return (
    <div className="App">
      <header className="App-header">
        <div>SpaceX</div>
        <div className="mainBody">
          <SubHeader
            setLauncheType={setLauncheType}
            launcheType={launcheType}
            dateS={dateS}
          />
          <DisplayTable
            displayData={displayData}
            selectedRow={selectedRow}
            setSelectedRow={setSelectedRow}
            dateS={dateS}
            setDate={setDate}
          />
          <div className="pagination"><Pagination
            count={Math.ceil(dataD.length / 10)}
            variant="outlined"
            shape="rounded"
            onClick={(e) => setPageNo(e.target.innerText)}
            align="right"
          /></div>
          
        </div>
      </header>
    </div>
  );
}

export default App;
