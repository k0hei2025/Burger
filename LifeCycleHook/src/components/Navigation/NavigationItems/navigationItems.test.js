import React from "react";
import NavigationItem from "../NavigationItems/NavigationItem/NavigationItem";
import NavigationItems from "./NavigationItems"
import {configure , shallow} from "enzyme"
import Adapter from "enzyme-adapter-react-16";

configure({adapter : new Adapter()})

describe("<NavigationItems/>",()=>{
   let wrapper;
    beforeEach(()=>{
        wrapper = shallow(<NavigationItems/>) 
    })
    it("Should rendered two <NavigationItem/> elements if not authenticated",()=>{
           
           expect (wrapper.find(NavigationItem)).toHaveLength(2)
    })
    it("Should rendered three <NavigationItem/> elements if  authenticated",()=>{
     wrapper.setProps({isAuthentication : true});
           expect (wrapper.find(NavigationItem)).toHaveLength(3)
    })
    it("Should rendered three contains to check exacat value <NavigationItem/> elements if  authenticated",()=>{
     wrapper.setProps({isAuthentication : true});
           expect (wrapper.contains(<NavigationItem link="/logout">Logout</NavigationItem>)).toEqual(true)
    })
})