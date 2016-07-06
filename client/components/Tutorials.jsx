import React from 'react';
import TutorialsList from './TutorialsList.jsx';
import qwest from 'qwest';

export default class Tutorials extends React.Component {
  constructor(){
    super();
    this.state = { data: [] }
  }

  componentDidMount() {
    var self = this;
    qwest.get('http://localhost:4000/api/tutorials')
  	  .then(function(xhr, response) {
        self.setState({ data: response});
	    });
  }
  
  render() {
    return (
      <div className="container">
        <input type="text" className="search" placeholder="Click to search tutorials"/>
        <TutorialsList data={this.state.data} />
      </div>
    )
  }
}
