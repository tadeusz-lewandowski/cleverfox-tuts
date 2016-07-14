import React from 'react';
import qwest from 'qwest';
import Unauthorized from './Unauthorized.jsx';
import Navbar from './Navbar.jsx';

export default class App extends React.Component{
  constructor(){
    super();
    this.state = {
      authorized: undefined
    }
  }
  componentDidMount(){
    var self = this;
    qwest.get('http://localhost:4000/api/profile')
  	  .then(function(xhr, response) {
        console.log(response);
        self.setState({authorized: true });
	    })
      .catch(function(e, xhr, response) {
        console.log(response);
        self.setState({authorized: true });
     });
  }
  render(){
    if(this.state.authorized == undefined){
      return (
        <div>Loading...</div>
      )
    } else if(!this.state.authorized){
      return <Unauthorized />
    } else if(this.state.authorized){
      return(
        <div>
          <Navbar />
          {this.props.children}
        </div>
      )
    }

  }
}
