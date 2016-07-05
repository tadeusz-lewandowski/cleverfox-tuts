import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import App from './components/App.jsx';
import Tutorials from './components/Tutorials.jsx';
import About from './components/About.jsx';

render((
  <Router>
    <Route path="/" component={App}>
      <Route path="tutorials" component={Tutorials} />
      <Route path="aboutme" component={About} />
    </Route>
  </Router>
), document.getElementById('app'));
