import {put} from "redux-saga/effects";
import {delay} from "redux-saga/effects"
import* as actionCreaters from "../actions/actionTypes";
import axios from 'axios';
import * as actions from "../actions/index";

export function* logoutSaga(action){
   yield  localStorage.removeItem("token");
   yield localStorage.removeItem("expirationDate");
   yield localStorage.removeItem("userId") 
  yield put(actions.logOutSucceded());
}

export function* checkTimeOut(action){
  yield delay(action.expirationTime * 100000)
  yield put(actions.logOut())   
}

export function* authUserSaga(action){
  yield put(actions.authStart());
  const authData = {
      email:action.email,
      password:action.password,
      returnSecureToken:true
  }
     let url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBh2hdxptiU3wy-XAYcsDHmEjoA5529Ftc";
   if (!action.isSignUp){
     url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBh2hdxptiU3wy-XAYcsDHmEjoA5529Ftc";
   }
   try {
 const response  = yield axios.post (url , authData)
   const expirationDate = yield new Date( new Date().getTime() + response.data.expiresIn * 1000)
  yield localStorage.setItem("token" , response.data.idToken)
  yield localStorage.setItem("expirationDate" , expirationDate)
  yield localStorage.setItem("userId" , response.data.localId)
  yield put(
    actions.authSuccess(response.data.idToken , response.data.localId ))    
 
    yield put ( actions.timeOut(response.data.expiresIn))
} 
 catch(error) {
   yield put (actions.authfail(error.response.data.error))
}
}


export function* authCheckState(action) {
  
    const token = yield localStorage.getItem("token");
    if (!token){
        yield put (actions.logOut())

    }else{
        
        const expirationDate = yield new Date(
        localStorage.getItem("expirationDate"))

        if (expirationDate <= new Date())   {
            yield put(actions.logOut())
        } else{
            const userId = yield localStorage.getItem("userId")
            yield put(actions.authSuccess(token , userId))
            yield put(
              actions.timeOut((expirationDate.getTime() - new Date().getTime())/1000
               )
            )
              }
    }
}

