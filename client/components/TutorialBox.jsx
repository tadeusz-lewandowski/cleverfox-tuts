import React from 'react';

export default class TutorialBox extends React.Component {
  render() {
    return (
      <li>
        <div>
          <h1>{this.props.category}</h1>
          <h4>{this.props.title}</h4>
        </div>
      </li>
    )
  }
}
