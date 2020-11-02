import React,{Component} from 'react';
import Aux from '../../hoc/Aux';
import ReactCss from "../Layout/Layout.css";
import Toolbar from "../../Components/toolbar/toolbar";
import SideDrawer from "../../Components/SideDrawer/SideDrawer";
class Layout extends Component{
    state = {
        showSideDrawer:true
    }
    sideDrawerClosedHandler=()=>{
      this.setState({showSideDrawer:false});
   }
sideDrawerClickHandler=()=>{
 this.setState((prevState)=>{
    return{ 
    showSideDrawer:!this.state.showSideDrawer}
 });
}

    render(){
return(
<Aux>    
    <Toolbar drawerToggleClick={this.sideDrawerClickHandler} />
    <SideDrawer active={this.state.showSideDrawer}  hide={this.sideDrawerClosedHandler}/>
 <main className={ReactCss.Content}>
     {this.props.children}
 </main>
 </Aux>

)}}

export default Layout;



// import React,{Component} from 'react';
// import Aux from '../../hoc/Aux';
// import classes
//  from "../Layout/Layout.css";
// import Toolbar from "../../Components/toolbar/toolbar";
// import SideDrawer from "../../Components/SideDrawer/SideDrawer";

// class Layout extends Component {
//     constructor(){
//     super();

//         this.state = {
//             showSideDrawer: true
//         } 
//     }
  
//     sideDrawerClosedHandler = () => {
//         this.setState( { showSideDrawer: false } );
//     }

//     sideDrawerToggleHandler = () => {
//         this.setState( ( prevState ) => {
//             return { showSideDrawer: !prevState.showSideDrawer };
//         } );
//     }

//     render () {
//         return (
//             <Aux>
//                 <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
//                 <SideDrawer
//                     open={this.state.showSideDrawer}
//                     closed={this.sideDrawerClosedHandler} />
//                 <main className={classes.Content}>
//                     {this.props.children}
//                 </main>
//             </Aux>
//         )
//     }
// }

// export default Layout;