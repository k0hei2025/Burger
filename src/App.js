import React, { Component } from 'react';
import Layout from "../src/Components/Layout/Layout";
import BurgerBuilder from  "./Containers/BurgerBuilder/BurgerBuilder";
class App extends Component {
  render() {
    return (
    <div>
      <Layout />
      <BurgerBuilder /> 
   
      
    </div>
      );
  }
}

export default App;
