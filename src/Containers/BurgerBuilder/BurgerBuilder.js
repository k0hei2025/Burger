import React,{Component} from 'react';
import Aux from "../../hoc/Aux";
import Burger from "../../Components/BurgerIngredients/Burger";
import BuildControls from "../../Components/BuildControls/BuildControls";
import Model from "../../Components/UI/Model/Model";
import OrderSummary from "../../Components/OrderSummary/OrderSummary";

const INGREDIENT_PRICES={
    salad:.5,
    cheese:.6,
    meat:1.4,
    bacon:.8

}
class BurgerBuilder extends Component{
    state={
        ingredients:{
    salad:0,
    bacon:0,
    cheese:0,
    meat:0
        },
        totalCount: 4,
     purchasable: false,
     purchasing: false
    }
      
    updatePurchaseState (ingredients){
     const sum = Object.keys(ingredients)
     .map(igkey =>{
         return ingredients[igkey];
     })
     .reduce((sum,el)=>{
         return sum+el;
     },0);
     this.setState({purchasable:sum>0})
    }

     ingredientAdder=(type)=>{
 const oldCount = this.state.ingredients[type];
 const updateIngredient = oldCount +1; 
 const updateIngredients ={
     ...this.state.ingredients
 };
 updateIngredients[type] = updateIngredient;
 const addPrice = INGREDIENT_PRICES[type];
 const oldPrice = this.state.totalCount;
 const updatedPrice = oldPrice+addPrice; 
 this.setState({totalCount:updatedPrice,ingredients:updateIngredients});
 this.updatePurchaseState(updateIngredients);
}


ingredientDeducter=(type)=>{
    const oldCount = this.state.ingredients[type];
    if (oldCount<=0){
        return;
    }
    const updateIngredient = oldCount - 1; 
    const updateIngredients ={
        ...this.state.ingredients
    };
    updateIngredients[type] = updateIngredient;
    const priceDeduct = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalCount;
    const updatedPrice = oldPrice-priceDeduct; 
    this.setState({totalCount:updatedPrice,ingredients:updateIngredients});
   this.updatePurchaseState(updateIngredients);
} 
upgradeHandler =()=>{
 this.setState({purchasing:true})
}
removeHandler=()=>{
    this.setState({purchasing:false})
}
continueHandler=()=>{
    alert("you continue Customising");
}
    render(){
        const disabled = {
         ...this.state.ingredients   
        }
        for (let key in disabled){
         disabled[key]=disabled[key]<=0;
        }
    return (
        
        <Aux>
            <Model show={this.state.purchasing} modelClosed={this.removeHandler}>
                    <OrderSummary ingredientMenu={this.state.ingredients} 
                       cancel={this.removeHandler}
                       continue={this.continueHandler}
                       price={this.state.totalCount}
                    />
            
            </Model>
            <Burger ingredients={this.state.ingredients} />
           <BuildControls  
           moreIngredients={this.ingredientAdder}
           deductIngredients={this.ingredientDeducter}
           hide={disabled}
           ordered={this.upgradeHandler}
           purchased ={this.state.purchasable}
           price={this.state.totalCount}
                      />  
               </Aux>
    );
}
}
export default BurgerBuilder;