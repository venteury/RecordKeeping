import React from "react";
import "./Inputfield.css";
// import Add from "../resources/Vectoradd.svg";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useState,useEffect } from "react";


const Inputfield = ({setArrFunc}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);

  useEffect(()=> {
    setArrFunc(data);
   });

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updateData =()=>{
    setData([...data,{
      name,email
    }])
    setName("");
    setEmail("");
  }

  return (
    <div>
      <div className="container">
        {/* <form> */}
          <div className="row">
            <div className="col">
              <input
                type="text"
                value={name}
                onChange={updateName}
                className="form-control"
                placeholder="Name"
              />
            </div>
            <div className="col">
              <input
                type="text"
                onChange={updateEmail}
                value={email}
                className="form-control"
                placeholder="Email"
              />
            </div>
            <button className="add" onClick={updateData}>
              <AddCircleIcon />
            </button>
          </div>
        {/* </form> */}
      </div>
    </div>
  );
};

export default Inputfield;
