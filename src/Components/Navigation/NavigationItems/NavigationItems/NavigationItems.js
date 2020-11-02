import React from "react";
import ReactCss from "../NavigationItems/NavigationItems.css";
import NavigationItem from "../NavigationItem/NavigationItem";
const navigationItems =(props)=>(
    <ul className={ReactCss.NavigationItems}>
            <NavigationItem link="/">BurgerBuilder</NavigationItem>
            <NavigationItem link="/"> CheckOut </NavigationItem>
    </ul>

)
export default navigationItems;