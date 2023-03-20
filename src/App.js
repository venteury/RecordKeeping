import "./App.css";
import Header from "./components/Header/Header";
import Inputfield from "./components/InputField/Inputfield";
import { useState } from "react";
import Values from "./components/values/Values";

function App() {
  const [arr, setArr] = useState([]);

  return (
    <div className="App">
      <Header />
      <Inputfield setArrFunc={setArr} />
      <div>
      <div className="field">
        <h2 className="text">Name</h2>
        <h2 className="text">Email</h2>
      </div>
      </div>
      {arr.map((element, index) => {
        return (
          <Values name={element.name} email={element.email} index={index} key={index} />
        );
      })}
    </div>
  );
}

export default App;
