import React from 'react';
import TutorialBox from './TutorialBox.jsx';
import SearchTutorials from './SearchTutorials.jsx';
import sortBy from 'sort-array';

export default class TutorialsList extends React.Component {
  render() {

    var tutorials = this.props.data.map(function(tutorial) {
      return (
        <TutorialBox key={tutorial._id} id={tutorial._id} category={tutorial.category} title={tutorial.title} />
      );
    });

    return (
      <div>
        <SearchTutorials />
        <ul className="thumbnails">
          {sortBy(tutorials, 'key').reverse()}
        </ul>
      </div>
    )

  }
}
