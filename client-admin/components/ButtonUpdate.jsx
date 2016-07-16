import React from 'react';
import {hashHistory} from 'react-router';
import qwest from 'qwest';

export default class ButtonUpdate extends React.Component{

  editTutorial(){
    hashHistory.push('/edittutorial/' + this.props.id);
  }
  render(){
    return (
      <button onClick={this.editTutorial.bind(this)}>Edit</button>
    )
  }
}
