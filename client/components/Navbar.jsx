import React from 'react';
import { Link } from 'react-router';
import qwest from 'qwest';

export default class Navbar extends React.Component {

  constructor(){
    super();
    this.state = {data : []};
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
      navButton = <span>Sign-in</span>;
    }
    return (
      <nav className="navbar">
        <div className="container">
          <ul className="navbar-menu navbar-menu-right">
            <li><Link to="/tutorials" className="link-active">Home</Link></li>
            <li><Link to="/aboutme">About</Link></li>
            <li>{navButton}</li>
          </ul>
        </div>
      </nav>
    )
  }
}
