import React from "react";
import ReactCss from "../BuildControl/BuildControl.css";

const buildControl=(props)=>(

    <div className={ReactCss.BuildControl}>

    <div className={ReactCss.Label}> {props.label} </div>
        <button className={ReactCss.Less}
         onClick={props.less}
          disabled={props.disable} >Less</button>
        <button className={ReactCss.More}onClick={props.more}>More</button>
    </div>
    
    
)
export default buildControl;