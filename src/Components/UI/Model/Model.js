import React,{Component} from "react";
import ReactCss from "../Model/Model.css";
import Aux from "../../../hoc/Aux";
import Backdrop from "../Backdrop/Backdrop";
class Model extends Component{

  shouldComponentUpdate(nextProps,nextState){
    return nextProps.show !== this.props.show;
  }
  componentDidMount(){
    console.log("[Modal] WillMount");
  }
  render(){
    return(
<Aux>
    <Backdrop show={this.props.show} clicked={this.props.modelClosed} />
  <div 
  className={ReactCss.Modal}
  style={{
       transform: this.props.show ? "translateY(0)":"translateY(-100vh)",
    opacity:this.props.show ?"1":"0"
  }}>


    {this.props.children}  
  </div>
  </Aux>
    )
  }
}
  

export default Model;