import React, { Component } from 'react';
import { Redirect, Route, Switch , withRouter } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Logout  from "./containers/Auth/Logout/logout";
import {connect} from "react-redux";
import asyncComponent from "./hoc/asyncComponent/asyncComponent";
import * as actions from "./store/actions/index";

const asyncCheckOut = asyncComponent(()=>{
  return import("./containers/Checkout/Checkout")
})

const asyncOrders =asyncComponent(()=>{
  return import('./containers/Orders/Orders')
})

const asyncAuth =asyncComponent(()=>{
  return import("./containers/Auth/Auth")
})


class App extends Component {
  render () {
    let router = (
      <Switch>
      <Route path="/" exact component={BurgerBuilder} />
      <Route path="/auth" exact component={asyncAuth} />
     <Redirect to="/"/>
      </Switch>
    )
    if (this.props.isAuthentication){
      router = (
        <Switch>
        <Route path="/checkout" component={asyncCheckOut} />
        <Route path="/orders" component={asyncOrders} />
        <Route path="/" exact component={BurgerBuilder} />
        <Route path="/auth" exact component={asyncAuth} />
        <Route path="/logout" component={Logout} />
        <Redirect to="/"/>
      </Switch>

    
      )
    
    }
      

    return (
      <div>
        <Layout>
    {router}
        </Layout>
      </div>
    );
  }

}

const mapStateToProps=state=>{
  return {
    isAuthentication: state.auth.token!==null
  }
}

const mapDispatchToProps=dispatch=>{
   return {
  onAutoSignUp : ()=> dispatch(actions.authCheckState())      
  }
}
export default withRouter (connect(mapStateToProps , mapDispatchToProps)(App));
