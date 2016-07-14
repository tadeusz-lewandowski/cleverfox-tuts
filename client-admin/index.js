import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router';
import App from './components/App.jsx';
import Tutorials from './components/Tutorials.jsx';

console.log('eeee');
render((
  <Router history={hashHistory}>
    <Route path="/" component={ App }>
      <IndexRoute component={ Tutorials } />
      <Route path="test" component={ Tutorials } />

    </Route>
  </Router>
), document.getElementById('app'));
