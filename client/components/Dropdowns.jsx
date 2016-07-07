import React from 'react';

export default class Dropdowns extends React.Component {


  render() {
    var dropdown = null;

    if(this.props.mode == 'sign-in'){
      console.log('sign-in')
      dropdown = (
        <div>
          <input type="text" placeholder="Username" className="sign-in-input"/>
          <input type="password" placeholder="Password" className="sign-in-input"/>
          <button className="sign-in-button">Sign-in</button>
          <span className="sign-up-text">New to Cleverfox? Sign up</span>
        </div>
      );
    }else{
      console.log('cos innego')
    }

    return (
      <div className="dropdowns" id='dropdowns'>
        <div className="container">
          <div className="sign-in-menu">
            {dropdown}
          </div>
        </div>
      </div>
    );

  }
}
