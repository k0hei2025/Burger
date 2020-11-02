import React from "react";
import ReactCss from "../BurgerIngredients/Burger.css";
import BurgerIngredients from "../BurgerIngredients/BurgerIngrdients";
const burger=(props)=>{
    let ingredientsStorage =Object.keys(props.ingredients).map(igkey=>{
        return [...Array(props.ingredients[igkey])].map((_,i)=>{
   return <BurgerIngredients key={igkey+i} type={igkey} />
        });
    })
    .reduce((arr,sl)=>{
        return arr.concat(sl)
    },[]);

    if(ingredientsStorage.length===0){
        ingredientsStorage=<div><p>please insert ingredients! </p></div>
    }
  
           return(
    <div className={ReactCss.burger}>  
        <BurgerIngredients  type={"burger-top"} />
          {ingredientsStorage}
         <BurgerIngredients type={"burger-bottom"}/>
        
</div>
           )
}
export default  burger;