import React from 'react'
import useLocalStorage from '../UseLocalStorage'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function NextTab() {
    const [exp,setExp]= useLocalStorage('exp')
    const updateTotalExp=(value)=>{
        setExp(value);
    }
    
    return (
        <div>
            <input 
            className="total-exp"
            value={exp}
            onChange={(e)=>updateTotalExp(e.target.value)}
            />
            <button type="submit" >Submit</button>
        </div>
    )
}

export default NextTab
