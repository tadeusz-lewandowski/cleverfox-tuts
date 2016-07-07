import React from 'react';
import { Link } from 'react-router';
import qwest from 'qwest';
import SignInButton from './SignInButton.jsx';
import Dropdowns from './Dropdowns.jsx';
import LoggedInButton from './LoggedInButton.jsx';

export default class Navbar extends React.Component {

  constructor(){
    super();
    this.state = {username : undefined, mode: undefined};
    document.addEventListener("click", this.closeDropdowns.bind(this));
    console.log('render w constr');
  }

  componentDidMount(){
    console.log('render w did');
    var self = this;
    qwest.get('http://localhost:4000/api/profile')
  	  .then(function(xhr, response) {
        console.log(response);
        self.setState({username : response.username, mode: 'logged'})
	    })
      .catch(function(e, xhr, response) {
        self.setState({username : undefined, mode: 'sign-in'})
     });
  }

  render() {
    var navButton;

    console.log('render w navbarze');
    if(this.state.username == undefined){
      navButton = <SignInButton />;
    } else{
      navButton = <LoggedInButton username={this.state.username} />
    }

    return (
      <div>
        <nav className="navbar">
          <div className="container">
            <ul className="navbar-menu navbar-menu-right">
              <li><Link to="/tutorials" className="link-active">Home</Link></li>
              <li><Link to="/aboutme">About</Link></li>
              <li>{navButton}</li>
            </ul>
          </div>
        </nav>
        <Dropdowns mode={this.state.mode} change={this.changeModeHandler.bind(this)}/>
      </div>
    )
  }

  changeModeHandler(mode){
    this.setState({mode : mode});
  }

  closeDropdowns(event){
    var dropdowns = document.getElementById('dropdowns');
    if(dropdowns.style.display != 'none'){
      if(event.target.id != 'sign-in-menu' && event.target.parentNode.id != 'sign-in-menu' && event.target.id != 'sign-in-button'){
        dropdowns.style.display = 'none';
        if(this.state.mode != 'sign-in'){
          //this.changeModeHandler('sign-in');
        }
      }
    }


  }
}
