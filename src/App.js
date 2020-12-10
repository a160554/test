import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Pricing from './components/Pricing';
import { Event } from "./components/Tracking";

class App extends Component {

  render() {
    return (
    <Router >
        <div>
          <br>
          </br>
          <img class="mobile-logo preload-me" src="https://chativo.io/giticim/2020/02/logo-vertical.png" srcset="https://chativo.io/giticim/2020/02/logo-vertical.png 257w, https://chativo.io/giticim/2020/02/logo-vertical.png 257w" width="257" height="79" sizes="257px" alt="Chativo" data-pagespeed-url-hash="930198792" onload="pagespeed.CriticalImages.checkImageForCriticality(this);"></img>
          <br>
          </br>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link" onClick={Event("Home", "Visit Home", "HOME_PAGE")}> Home </Link></li>
            <li><Link to={'/pricing'} className="nav-link" onClick={Event("Pricing", "Visit Pricing", "PRICING_PAGE")}>Pricing</Link></li>
            <li><Link to={'/about'} className="nav-link" onClick={Event("About", "Visit About", "ABOUT_PAGE")}>About</Link></li>
          </ul>
          </nav>
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/pricing' component={Pricing} />
              <Route path='/about' component={About} />
          </Switch>
        </div>
      </Router>
    );
  }
  
}

export default App;