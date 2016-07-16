import React from 'react';
import { Link } from 'react-router';

export default class Navbar extends React.Component{

  render(){
    return (
      <ul>
        <li><Link to="/tutorials">Tutorials</Link></li>
        <li><Link to="/test">Test</Link></li>
      </ul>
    )
  }
}
