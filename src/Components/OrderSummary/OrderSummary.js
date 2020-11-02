import React,{Component} from "react";
import Button from "../../Components/UI/Button/Button";
import Aux from "../../hoc/Aux";

class OrderSummary extends Component{
    render(){
        const ingredientSummary = Object.keys(this.props.ingredientMenu).map(ctrl=>{
            return <li>{ctrl}:{this.props.ingredientMenu[ctrl]}</li>
            })
        return(
            <Aux>

        <h3>Your Order</h3>
        <p>Your Delicious Burger Ingredients:</p>
        <ul>
            {ingredientSummary}
        </ul>
        <p><strong>Price: ${this.props.price.toFixed(2)}</strong></p>
        <p>Your want More?</p>
        <Button  btntype="Danger" clicked={this.props.cancel}>CANCEL</Button>
        <Button btnType="Success" clicked={this.props.continue}>CONTINUE</Button>
        </Aux>
        )
        }
    }
export default OrderSummary;