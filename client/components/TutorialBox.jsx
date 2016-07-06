import React from 'react';
import {browserHistory} from 'react-router';

export default class TutorialBox extends React.Component {
  render() {
    return (
      <li onClick={this.clickFunction.bind(this)}>
        <div>
          <h1>{this.props.category}</h1>
          <h4>{this.props.title}</h4>
        </div>

      </li>
    )
  }
  clickFunction(){
    //window.location =  'tutorials/' + this.props.id;
    browserHistory.push('/tutorials/' + this.props.id);

  }
}
