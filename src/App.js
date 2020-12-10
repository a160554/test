import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Pricing from './components/Pricing';
import { createBrowserHistory } from 'history';
import ReactGA from 'react-ga';

const history = createBrowserHistory();

ReactGA.initialize('UA-184753310-1');

// Initialize google analytics page view tracking
history.listen(location => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});

class App extends Component {
  render() {
    return (
    <Router history={history}>
        <div>
          <br>
          </br>
          <img class="mobile-logo preload-me" src="https://chativo.io/giticim/2020/02/logo-vertical.png" srcset="https://chativo.io/giticim/2020/02/logo-vertical.png 257w, https://chativo.io/giticim/2020/02/logo-vertical.png 257w" width="257" height="79" sizes="257px" alt="Chativo" data-pagespeed-url-hash="930198792" onload="pagespeed.CriticalImages.checkImageForCriticality(this);"></img>
          <br>
          </br>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/pricing'} className="nav-link">Pricing</Link></li>
            <li><Link to={'/about'} className="nav-link">About</Link></li>
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