import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router';
import App from './components/App.jsx';
import Tutorials from './components/Tutorials.jsx';
import Test from './components/Test.jsx';
import NewTutorial from './components/NewTutorial.jsx';

console.log('eeee');
render((
  <Router history={hashHistory}>
    <Route path="/" component={ App }>
      <IndexRoute component={ Tutorials } />
      <Route path="tutorials" component={ Tutorials } />
      <Route path="test" component={ Test } />
      <Route path="newtutorial" component={ NewTutorial } />
    </Route>
  </Router>
), document.getElementById('app'));
