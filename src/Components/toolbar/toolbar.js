import React from "react";
import Logo from "../../Components/Logo/Logo";
import Reactcss from "../../Components/toolbar/toolbar.css";
import NavigationItems from "../../Components/Navigation/NavigationItems/NavigationItems/NavigationItems";
import Menu from "../../Components/Navigation/NavigationItems/MenuClick/Menu";
const toolbar =(props)=>(
    <header className={Reactcss.Toolbar}>
        
        <Menu info={props.drawerToggleClick} />
        {console.log("button is pushed menu")}  
        <div className={Reactcss.Logo}> 
        <Logo />  
        </div>
        <nav className={Reactcss.DesktopOnly}>
        <NavigationItems />    
        </nav>
      
    </header>
);
export default toolbar;


