import axios from "axios"
import * as actionTypes from "./actionTypes";
 export const authStart =()=>{
     return {
    type : actionTypes.AUTH_START 
 }
}
export const authSuccess =(token , userId)=>{
    return {
   type : actionTypes.AUTH_SUCCESS ,
   idToken :token,
   userId : userId 
}
}
export const authfail =(error)=>{
    return {
        error: error,
   type : actionTypes.AUTH_FAIL ,
}
}
export const logOut=()=>{
    // localStorage.removeItem("token");
    // localStorage.removeItem("expirationDate");
    // localStorage.removeItem("userId") 
    return {
        type:actionTypes.INITIATE_LOG_OUT
    }
}

export const logOutSucceded=()=>{
    return {
        type:actionTypes.LOG_OUT
    }
}
export const timeOut=(expirationTime)=>{
    return {
         type:actionTypes.AUTH_CHECK_TIMEOUT,
         expirationTime:10
    }
}

export const auth =(email , password , isSignUp)=>{
    return {

        type:actionTypes.AUTH_USER,
        email:email,
        password:password,
        isSignUp:isSignUp
    }
}
export const AuthRedirect=(path)=>{
return {
    type : actionTypes.AUTH_REDIRECT,
 path: path
}
}

export  const authCheckState=()=>{
     return { 
         type: actionTypes.AUTH_CHECK_STATE
        }
 }