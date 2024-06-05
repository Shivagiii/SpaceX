import "./App.css";
import { useEffect, useState } from "react";
import DisplayTable from "./DisplayElements/DisplayTable";
import SubHeader from "./DisplayElements/SubHeader";
import axios from "axios";

function App() {
  const [displayData, setDisplayData] = useState([]);

  async function fetchData() {
    try {
      const { data } = await axios.get(
        "https://api.spacexdata.com/v3/launches?limit=10"
      );
      console.log(data);
      setDisplayData(data);
    } catch (e) {
      console.error(e);
      alert("failed to fetch data");
    }
  }
  useEffect(() => {
    fetchData();
    console.log();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <div>SpaceX</div>
        <div className="mainBody">
          <SubHeader />
          <DisplayTable displayData={displayData} />
        </div>
      </header>
    </div>
  );
}

export default App;
