import React, { useState } from "react";
import useLocalStorage from "../UseLocalStorage";


import { useHistory } from 'react-router-dom';


function Form() {
    let history = useHistory();

    const [fName,setFname]= useLocalStorage("fName");
    const [lName,setLname]= useLocalStorage("lName");
    const updateFname=(value)=>{
        setFname(value);
    }
    const updateLname=(value)=>{
        setLname(value);
    }

    const handleClick=()=>{
        history.push('/exp')
    }
  return (

    <div className="form">
      <form>
        <label>First name</label>
        <input className="first-name" 
        onChange={(e)=>updateFname(e.target.value)}
        value={fName}
        />
        <br/>
        <label>Last name</label>
        <input className="last-name"
         onChange={(e)=>updateLname(e.target.value)}
         value={lName}
        />
        <br/>
        <button class="next" 
        onClick={handleClick}>Next</button>
      </form>
    </div>
  );
}

export default Form;
