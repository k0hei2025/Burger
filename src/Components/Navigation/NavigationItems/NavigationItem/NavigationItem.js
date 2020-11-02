import React from "react";
import Reactcss from "../NavigationItem/NavigationItem.css";
const navigationItem =(props)=>(
         <ul className={Reactcss.NavigationItem}>
            <li><a 
            href={props.link} className={props.active ? Reactcss.active : null}>
             {props.children}   </a></li>
        </ul>
   
)
export default navigationItem;