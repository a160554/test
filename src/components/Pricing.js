import React, { Component } from 'react';
import logo from './plan.jpg';
import {PageView, initGA} from './Tracking';

class Pricing extends Component {
  componentDidMount() {
    initGA("UA-184753310-1");
    PageView();
  }

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