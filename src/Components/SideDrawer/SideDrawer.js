import React from "react";
import Logo from "../Logo/Logo";
import NavigationItems from "../Navigation/NavigationItems/NavigationItems/NavigationItems";
import ReactCss from "../../Components/SideDrawer/SideDrawer.css"; 
import Backdrop from "../../Components/UI/Backdrop/Backdrop";
import Aux from "../../hoc/Aux";
//import Menu from "../../Components/Navigation/NavigationItems/MenuClick/Menu";
const sideDrawer=(props)=>{
    let attachedClasses = [ReactCss.SideDrawer , ReactCss.Close];
    if(props.active){
        attachedClasses = [ReactCss.SideDrawer , ReactCss.Open];
    }
    return (
        <Aux>
        <Backdrop show={props.active} clicked={props.hide}/> 
        <div className={attachedClasses.join(" ")}>
      <div className={ReactCss.Logo} >
      <Logo />
      </div>
    <nav >
        <NavigationItems />
    </nav>
    </div >
    </Aux>

)}
export default sideDrawer;