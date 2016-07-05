import React from 'react';
import { Link } from 'react-router';

export default class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <div className="container">
          <ul className="navbar-menu navbar-menu-right">
            <li><Link to="/tutorials" className="link-active">Home</Link></li>
            <li><Link to="/aboutme">About</Link></li>
            <li><span>sign-in</span></li>
          </ul>
        </div>
      </nav>
    )
  }
}
