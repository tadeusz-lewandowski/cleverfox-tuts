import React from 'react';
import TutorialBox from './TutorialBox.jsx';

export default class Tutorials extends React.Component {
  render() {
    return (
      <div className="container">
        <input type="text" className="search" placeholder="Click to search tutorials"/>
        <ul className="thumbnails">
          <TutorialBox />
        </ul>
      </div>
    )
  }
}
