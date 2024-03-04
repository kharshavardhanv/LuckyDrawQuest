import React, { useState } from 'react';
import './Gamy.css';
export default function Gam(props) {
    const [die,setdi]=useState(Array.from({length:props.num}));
    const chk=()=>
    {
        let sum=0;
        die.map(e=>
            {
                sum+=e
                return e;
            })
        return sum===props.n;
    }
    const roll=()=>
    {
         setdi(prdie=>
            {
            return  prdie.map(e=>(e=getran()));
        })
    }
    const getran=()=>
    {
        return Math.floor(Math.random()*props.n);
    }

  return (
    <div>
        <span style={{fontSize:"70px"}}>Lucky{props.n}</span>
      <div className="bx">
        { 
            die.map((e,idx)=>
                {
                   return <span key={idx} className='smbx' style={{alignContent:"center"}}>{e}</span>
                })
        }
      </div>
      <button onClick={roll}>Roll Die</button>
      <br/>
      {chk()===true?<span className='smbx' style={{height:"5rem",width:"100%", fontSize:"50px"}}>!!!YOU WON</span>:""}
    </div>
  )
}
