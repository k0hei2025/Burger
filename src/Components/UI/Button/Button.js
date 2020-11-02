import React from "react";
import Reactcss from "../Button/Button.css";
const button = (props)=>(
    <button
className={[Reactcss.Button,Reactcss[props.btnType]].join(" ")}
onClick={props.clicked}>{props.children}
</button>
)
export default button;