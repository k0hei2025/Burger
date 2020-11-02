import { take, takeEvery  } from "redux-saga/effects"
import {checkTimeOut , authUserSaga, authCheckState } from "./Auth"
import * as actionTypes from "../actions/actionTypes";
import {logoutSaga} from "./Auth";
import {initIngredients} from "./burgerBuilder"
import  {purchaseBurger , fetchOrder} from "./Order"
export function* watchAuth() {
    yield takeEvery(actionTypes.INITIATE_LOG_OUT , logoutSaga)
   yield takeEvery(actionTypes.AUTH_CHECK_TIMEOUT , checkTimeOut)
   yield takeEvery(actionTypes.AUTH_USER,authUserSaga)
   yield takeEvery(actionTypes.AUTH_CHECK_STATE , authCheckState) 
   }
export function* burgerBuilder(){
  yield takeEvery(actionTypes.INIT_INGREDIENTS , initIngredients)
}
export function* order(){
  yield takeEvery(actionTypes.PURCHASE_BURGER ,purchaseBurger)
  yield takeEvery(actionTypes.FETCHED_ORDERS, fetchOrder)
}
