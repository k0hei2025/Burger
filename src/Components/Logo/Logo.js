import React from "react";
import Image from "../../assets/images/burger-logo.png";
import Reactcss from "../../Components/Logo/Logo.css";

const logo =(props)=>(
 <div className={Reactcss.Logo} style={{height:props.height}}>
     <img src={Image} alt="MyBurger" />
 </div>
);
export default logo;