import React from 'react';
import qwest from 'qwest';
import { Link } from 'react-router';
import TableTutorials from './TableTutorials.jsx';

export default class Tutorials extends React.Component{

  constructor(){
    super();
    this.state = {
      loading: true,
      resources: []
    }
  }

  componentDidMount(){
    var self = this;
    qwest.get('http://localhost:4000/api/tutorials')
  	  .then(function(xhr, response) {
        self.setState({ resources: response, loading: false});
	    });
  }

  render(){
    if(this.state.loading){
      return (<div>Loading...</div>)
    } else{
      return (
        <div>
          <h2>Tutoriale</h2>
          <Link to="/newtutorial">New tutorial</Link>
          <TableTutorials resources={this.state.resources} update={this.updateResources.bind(this)}/>
        </div>
      )
    }
  }

  updateResources(){
    var self = this;
    qwest.get('http://localhost:4000/api/tutorials')
  	  .then(function(xhr, response) {
        self.setState({ resources: response, loading: false});
	    });
  }
}
