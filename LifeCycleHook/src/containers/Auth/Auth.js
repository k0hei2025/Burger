import React , {Component} from "react"
import {connect} from "react-redux"
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import Spinner from "../../components/UI/Spinner/Spinner";
import classes from "../Auth/Auth.css";
import * as actions from "../../store/actions/index"
import { Redirect } from "react-router-dom";
import {updateObject , checkValidity} from "../../shared/utility";
class Auth extends Component {
    state ={
        orderForm: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Email'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail:true
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength:6
                },
                valid: false,
                touched: false
            }
    },
    isSignUp: true
}

componentDidMount(){
    if (!this.props.building && this.props.authRedirect !== "/" ){
        this.props.onRedirectPath()
    }
}

inputChangedHandler =(event , controlName)=>{
    const updatedValue = updateObject(this.state.orderForm , {

        [controlName]: updateObject(this.state.orderForm[controlName] , {
            value :  event.target.value,
            valid : checkValidity(event.target.value , this.state.orderForm[controlName].validation),
           touched :true

        }) 
    })  
    this.setState({orderForm: updatedValue})
}
SubmitHandler=(event)=>{
event.preventDefault();
this.props.onAuth(this.state.orderForm.email.value , this.state.orderForm.password.value , this.state.isSignUp)
}


SwitchAuthHandler=()=>{
    this.setState(prevState => {
        return {isSignUp: !prevState.isSignUp}
    })
}

render ()
    {
        const formElementsArray = [];
        for (let key in this.state.orderForm) {
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            });
        } 

        let form = formElementsArray.map(formElement =>(
    <Input 
    key={formElement.id}
    elementType={formElement.config.elementType}
    elementConfig={formElement.config.elementConfig}
    value={formElement.config.value}
    invalid={!formElement.config.valid}
    shouldValidate={formElement.config.validation}
    touched={formElement.config.touched}
    changed={(event) => this.inputChangedHandler(event, formElement.id)} />
) )

if(this.props.loading){
 form = <Spinner />   
}
let errorMessage = null

if (this.props.error){
     errorMessage = (
        <p>{this.props.error.message}</p>
     )

}
        // eslint-disable-next-line no-unused-vars
        let authRedirect = null ;
        if (this.props.isAuthenticated){
            authRedirect = <Redirect to={this.props.authRedirect} />
        }


        return (
            <div className={classes.Auth}>
            {errorMessage}
            <form onSubmit={this.SubmitHandler}>
            {form}
                <Button btnType="Success">SUBMIT</Button>
                </form>
                <Button clicked={this.SwitchAuthHandler}
                 btnType="Danger">SWITCH TO {this.state.isSignUp ? "LOGIN" : "SIGNUP"}</Button>
            </div>

        )
    }
} 

const mapStateToProps=state=>{
    return {
 loading : state.auth.loading,
 error:state.auth.error,
 isAuthenticated : state.auth.token !==null,
 authBuilding:state.burgerBuilder.building,
 authRedirect : state.auth.authRedirect
}
}

const dispatchToProps=dispatch=>{
    return {
       onAuth:(email , password , isSignUp)=> dispatch(actions.auth(email , password , isSignUp)),
       onRedirectPath: ()=> dispatch(actions.AuthRedirect("/"))
    }
}

export default connect(mapStateToProps,dispatchToProps)(Auth)   