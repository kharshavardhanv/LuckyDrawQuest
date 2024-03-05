import React, { useState } from 'react';
import './Gamy.css';

export default function Gam(props) {
  const getran = () => {
    return Math.floor(Math.random() * props.n);
  };

  const [die, setDie] = useState(Array.from({ length: props.num }, () => getran()));

  const chk = () => {
    const sum = die.reduce((acc, cur) => acc + cur, 0);
    return sum === parseInt(props.n);
  };
  

  const roll = () => {
    setDie(Array.from({ length: props.num }, () => getran()));
  };

  return (
    <div>
      <span style={{ fontSize: "70px" }}>Lucky{props.n}</span>
      <div className="bx">
        {die.map((e, idx) => (
          <span key={idx} className='smbx' style={{ alignContent: "center" }}>{e}</span>
        ))}
      </div>
      <button onClick={roll}>Roll Die</button>
      <br />
      {chk() ? <span className='smbx' style={{ height: "5rem", width: "100%", fontSize: "50px" }}>!!!YOU WON</span> : null}
    </div>
  );
}
