import React from "react";
import Reactcss from "../Backdrop/Backdrop.css"
const backdrop =(props)=>(
 
   props.show ? <div className={Reactcss.Backdrop} onClick={props.clicked}></div> :null
 );
 export default backdrop;