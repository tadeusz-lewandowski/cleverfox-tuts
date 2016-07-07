import React from 'react';
import { Link } from 'react-router';
import qwest from 'qwest';
import SignInButton from './SignInButton.jsx';

export default class Navbar extends React.Component {

  constructor(){
    super();
    this.state = {data : []};
    document.addEventListener("click", this.closeDropdowns);
  }

  componentDidMount(){
    var self = this;
    qwest.get('http://localhost:4000/api/profile')
  	  .then(function(xhr, response) {
        console.log(response);
	    })
      .catch(function(e, xhr, response) {
        self.setState(data.username = undefined)
     });
  }

  render() {
    var navButton;
    if(this.state.data.username == undefined){
      navButton = <SignInButton />;
    }
    return (
      <nav className="navbar">
        <div className="container">
          <ul className="navbar-menu navbar-menu-right">
            <li><Link to="/tutorials" className="link-active">Home</Link></li>
            <li><Link to="/aboutme">About</Link></li>
            <li id='sign-in-button'>{navButton}</li>
          </ul>
        </div>
      </nav>
    )
  }

  closeDropdowns(event){
    var dropdowns = document.getElementById('dropdowns');
    if(dropdowns.style.display != 'none'){
      if(event.target.id != 'sign-in-menu' && event.target.parentNode.id != 'sign-in-menu' && event.target.id != 'sign-in-button'){
        dropdowns.style.display = 'none';
      }
    }


  }
}
