import React from 'react';
import qwest from 'qwest';

export default class Dropdowns extends React.Component {

  render() {
    var dropdown = null;

    if(this.props.mode == 'sign-in'){
      console.log('sign-in')
      dropdown = (
        <div className="sign-in-menu" id='sign-in-menu'>
          <input type="text" placeholder="Username" className="sign-in-input" id='username'/>
          <input type="password" placeholder="Password" className="sign-in-input" id='password'/>
          <button className="sign-in-button" onClick={this.signIn}>Sign-in</button>
          <span className="sign-up-text" onClick={this.props.change.bind(null,'sign-up')}>New to Cleverfox? Sign up</span>
        </div>
      );
    }else if(this.props.mode == 'sign-up'){
      dropdown = (
        <div className="sign-in-menu" id='sign-in-menu'>
          <input type="text" placeholder="Username" className="sign-in-input"/>
          <input type="password" placeholder="Password" className="sign-in-input"/>
          <input type="password" placeholder="Repeat password" className="sign-in-input"/>
          <button className="sign-in-button">Sign-up</button>
          <span className="sign-up-text" onClick={this.props.change.bind(null,'sign-in')}>Or just sign in</span>
        </div>
      );
    } else if(this.props.mode == 'logged'){
      dropdown = (
        <div className="sign-in-menu" id='sign-in-menu'>
          <span className="sign-up-text">Log out</span>
        </div>
      );
    }else{
      console.log('cos innego')
    }

    return (
      <div className="dropdowns" id='dropdowns'>
        <div className="container">
          {dropdown}
        </div>
      </div>
    );

  }

  signIn(){
    var username = document.getElementById('username');
    var password = document.getElementById('password');
    if(username.value != '' && password.value != ''){
      qwest.post('http://localhost:4000/api/login', {
        username: username.value,
        password: password.value
     })
     .then(function(xhr, response) {
        console.log(response);
     })
     .catch(function(e, xhr, response) {
        console.log(e);
     });
    }
  }
}