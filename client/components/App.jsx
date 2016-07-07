import React from 'react';
import Navbar from './Navbar.jsx';
import Dropdowns from './Dropdowns.jsx';

export default class App extends React.Component {

  render() {
    return (
      <div>
        <Navbar />
        <Dropdowns />
        {this.props.children}
      </div>
    )
  }
}
