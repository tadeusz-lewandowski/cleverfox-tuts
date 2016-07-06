import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import App from './components/App.jsx';
import Tutorials from './components/Tutorials.jsx';
import About from './components/About.jsx';
import TutorialDetails from './components/TutorialDetails.jsx';

render((
  <Router history={browserHistory}>
    <Route path="/" component={ App }>
      <IndexRoute component={ Tutorials } />
      <Route path="tutorials" component={ Tutorials } />
      <Route path="aboutme" component={ About } />
      <Route path="tutorials/:id" component={ TutorialDetails } />
    </Route>
  </Router>
), document.getElementById('app'));
