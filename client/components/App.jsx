import React from 'react';
import Navbar from './Navbar.jsx'

export default class App extends React.Component {
  
  render() {
    console.log('aaa')
    return (
      <div>
        <Navbar />
        {this.props.children}
      </div>
    )
  }
}
