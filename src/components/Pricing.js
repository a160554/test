import React, { Component } from 'react';
import logo from './plan.jpg';

class Pricing extends Component {
  
  render() {
    return (
        <div>
          <center><h2>Pricing</h2></center>
          <center><img src={logo} className="App-logo" alt="logo" /></center>
        </div>
    );
  }
}

export default Pricing;