import {put} from "redux-saga/effects";
import {delay} from "redux-saga/effects"
import* as actionCreaters from "../actions/actionTypes";
import axios from 'axios';
import * as actions from "../actions/index";

export function* initIngredients(action){
   try {
      const response =  yield axios.get( 'https://burger-project-8be36.firebaseio.com/ingredients.json' )
           
              yield put(actions.setIngredients(response.data));
   }
            catch( error) {
                yield put(actions.fetchIngredientsFailed());
            } 
    };

