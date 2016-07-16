import React from 'react';
import TutorialsList from './TutorialsList.jsx';
import qwest from 'qwest';
import io from 'socket.io-client';

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

    var socket = io();

    socket.on('newTutorial', function(tutorial){
      console.log('socket works');
      var data = self.state.data;
      data.push(tutorial);
      self.setState({data : data});
    });

    socket.on('deleteTutorial', function(tutorial){
      var tutorialId = tutorial.id;
      var data = self.state.data;

      var updatedTuts = data.filter(function(tut) {
          return [tutorialId].indexOf(tut._id) === -1;
      });

      console.log(updatedTuts);
      self.setState({data : updatedTuts});
    });

    socket.on('updateTutorial', function(tutorial){
      var data = self.state.data;

      var updatedTuts = data.map(function(tut){
        if(tut._id == tutorial._id){
          return tutorial;
        } else{
          return tut;
        }
      });
      self.setState({data : updatedTuts});
    });
  }

  render() {
    return (
      <div className="container">
        <TutorialsList data={this.state.data} />
      </div>
    )
  }
}
