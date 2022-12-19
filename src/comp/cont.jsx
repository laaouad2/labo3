import React from "react";
import { useState } from "react";
import { useParams , useNavigate } from 'react-router-dom';

export default function Counter() {

    const {id} = useParams();
    const navigate = useNavigate();

    const backHome = () => {
        navigate('/');
    }
  const [counter, setCounter] = useState(0);

  const Augmenter = () => {
    setCounter(count => count + 1);
  };

  

  const Diminuer = () => {
    if (counter >0) {
      setCounter(count => count - 1);
    }
  };

 
  

  const Reset = () => {
    setCounter(0)
  }
  return (
    
    <div className="counter">
    <h1>Counter</h1>
    <span className="counter__output">{counter}</span>
    <div className="btn_container">
      <button className="control_btn" onClick={Augmenter}>+</button>
      <button className="control_btn" onClick={Diminuer}>-</button>
      <button className="reset" onClick={Reset}>Reset</button>
    </div>
    <br />
    <br />
    <div>
        <button className="backHome" onClick={backHome}>Home</button>
      </div>
  </div>
  )

}
