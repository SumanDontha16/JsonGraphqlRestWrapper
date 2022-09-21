import "./App.css";
import DisplayData from "./components/DisplayData";
import GetUsers from "./components/GetUsers";

function App() {
  return (
    <div className="App">
      <div className="left-container">
        <GetUsers />
      </div>
      <div className="right-container">
        <DisplayData />
      </div>
    </div>
  );
}

export default App;
