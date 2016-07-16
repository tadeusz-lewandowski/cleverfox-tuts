import React from 'react';
import qwest from 'qwest';

export default class ButtonDelete extends React.Component{

  deleteTutorial(){
    var self = this;
    qwest.delete('http://localhost:4000/api/tutorials/' + self.props.id)
     .then(function(tutorials){
       self.props.update();
     })
     .catch(function(){

     });
  }

  render(){
    return (
      <button onClick={this.deleteTutorial.bind(this)} className='btn btn-danger'>Delete</button>
    )
  }
}
