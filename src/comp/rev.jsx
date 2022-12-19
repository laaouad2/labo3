import { useParams , useNavigate } from 'react-router-dom';


import React from "react";
import { useState } from "react";




export default function Reverse() {


    const {id} = useParams();
    const navigate = useNavigate();

    const backHome = () => {
        navigate('/');
    }


  const [reverseStr, setReverseStr] = useState("");
  const [error, setError] = useState("");
  let value = "";



  const handleChange = (e) => {
    value = e.target.value ; 
    if (value.length <= 9 )
    {
      let valueReversed = value.split("").reverse().join("");
      setReverseStr(valueReversed );
    }
    else 
    {
      setError("desole on peut pas accepter plus que 9 carractere.")
    }
    
    
  };






  
  return (
    <div className="App">
      <h1> Inverseur de string </h1>
      <div className="reverse">
        <label className="reservedString">{reverseStr}</label>
      </div>
      <br />
      <form className="String">
        <input className="input" onChange={handleChange} />
      </form>
      <br />
      <div className="error">{error}</div>
      <br />
      <br />
      
      <div>
        <button className="backHome" onClick={backHome}>Home</button>
      </div>
      
    </div>
  );
}