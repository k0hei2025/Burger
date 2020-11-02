import React from "react";
import Reactcss from "../MenuClick/menu.css";
const menu=(props)=>{
    return(
    <div className={Reactcss.DrawerToggle} onClick={props.info}>
   <div></div>
    <div></div>
    <div></div>
</div>
)
    }
export default menu