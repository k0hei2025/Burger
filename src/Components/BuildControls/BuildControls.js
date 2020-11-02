import React from "react";
import ReactCss from "../BuildControls/BuildControls.css"
import BuildControl from "../../Components/BuildControls/BuildControl/BuildControl";

const controlls =[
   { label:"Salad" , type:"salad" },
   { label:"Cheese" , type:"cheese" },
   { label:"Bacon" , type:"bacon" },
   { label:"Meat" , type:"meat" },
]
const buildControls =(props)=>(
<div className={ReactCss.BuildControls}>
<p>Current Price: {props.price.toFixed(2)}</p>
    {
        controlls.map(ctrl=>(
            <BuildControl  key={ctrl.label} 
            label={ctrl.label}
            more={()=> props.moreIngredients(ctrl.type)}
            less={()=> props.deductIngredients(ctrl.type)}
            disable={props.hide[ctrl.type]}
            />
 
        ))}
<button className={ReactCss.OrderButton} disabled={!props.purchased} onClick={props.ordered} >ORDER NOW</button>
</div>
)
export default buildControls;