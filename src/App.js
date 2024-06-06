import "./App.css";
import { useEffect, useState } from "react";
import DisplayTable from "./DisplayElements/DisplayTable";
import SubHeader from "./DisplayElements/SubHeader";
import axios from "axios";

function App() {
  const [displayData, setDisplayData] = useState([]);
  const [launcheType, setLauncheType] = useState("");

  async function fetchData(launcheType) {
    let newData = [];
    let url = "https://api.spacexdata.com/v3/launches/";

    if (launcheType === "upcoming") url = url + launcheType;

    try {
      const { data } = await axios.get(url + "?limit=10"); 
      console.log(data);                         // Added logic to filter data according to launch type
      if (launcheType === "true") {
        newData = data.filter((row) => row.launch_success === true);
        setDisplayData(newData);
      } else if (launcheType === "false") {
        newData = data.filter((row) => row.launch_success === false);
        setDisplayData(newData);
      } else setDisplayData(data);
    } catch (e) {
      console.error(e);
      alert("failed to fetch data");
    }
  }

  useEffect(() => {
    fetchData();
    console.log();
  }, []);
  useEffect(() => {
    fetchData(launcheType);
  }, [launcheType]);
  return (
    <div className="App">
      <header className="App-header">
        <div>SpaceX</div>
        <div className="mainBody">
          <SubHeader
            setLauncheType={setLauncheType}
            launcheType={launcheType}
          />
          <DisplayTable displayData={displayData} />
        </div>
      </header>
    </div>
  );
}

export default App;
