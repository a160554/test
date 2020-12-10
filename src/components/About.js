import React, { Component } from 'react';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-184753310-1');
ReactGA.pageview('/about', ['about']);

class About extends Component {
  render() {
    return (
        <div>
          <center><h2>About</h2></center>
          <p>For your organization to compete and grow in a changing landscape, you need to invest in people and technology. Adopt agile development methods. Move to microservices. Upgrade your legacy systems to new cloud-native platforms and modernize business-critical apps. Initiate a “secure-by-default” posture. Deliver more of what your customers want, faster.</p>
        </div>
    );
  }
}

export default About;