import React from 'react';
import TutorialBox from './TutorialBox.jsx';

export default class TutorialsList extends React.Component {
  render() {

    var tutorials = this.props.data.map(function(tutorial) {
      return (
        <TutorialBox key={tutorial._id} id={tutorial._id} category={tutorial.category} title={tutorial.title} />
      );
    });
    return (
      <ul className="thumbnails">
        {tutorials}
      </ul>
    )

  }
}
