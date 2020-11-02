import React,{Component} from 'react';
import PropTypes from "prop-types";
import ReactCss from "../BurgerIngredients/BurgerIngredient.css";

class BurgerIngrdients extends Component {
    render(){
        let ingredients=null;
        switch (this.props.type) {
            case ("burger-bottom"):
                ingredients=<div className={ReactCss.BreadBottom}>
                </div>;
                break;
        case ("burger-top"):
            ingredients=<div className={ReactCss.BreadTop}>
                <div className={ReactCss.Seeds1}></div>
                    
                <div className={ReactCss.Seeds2}></div>
            </div>
            break;
        case ("meat"):
        ingredients=<div className={ReactCss.Meat}></div>
        break;
        case ("cheese"):
        ingredients=<div className={ReactCss.Cheese}>
        </div>
        break;
        case("salad"):
        ingredients=<div className={ReactCss.Salad}>
        </div>
        break;
        case("bacon"):
       ingredients= <div className={ReactCss.Bacon}>
        </div>
        break;
            default:
                ingredients=null;
                break;
    }
    return ingredients;
}
}
BurgerIngrdients.propTypes={
    type:PropTypes.string.isRequired 

}
  

export default BurgerIngrdients;