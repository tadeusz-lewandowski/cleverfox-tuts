import React from 'react';
import TutorialBox from './TutorialBox.jsx';
import SearchTutorials from './SearchTutorials.jsx';
import sortBy from 'sort-array';

export default class TutorialsList extends React.Component {

  constructor(){
    super();
    this.state = {
      filter: ''
    }
  }

  render() {
    var self = this;
    var tutorials = self.props.data.map(function(tutorial) {
      if(self.state.filter == undefined || self.state.filter == ''){
        return (
          <TutorialBox key={tutorial._id} id={tutorial._id} category={tutorial.category} title={tutorial.title} />
        );
      } else{
        if(tutorial.title.toLowerCase().indexOf(self.state.filter.toLowerCase()) != -1 || tutorial.category.toLowerCase().indexOf(self.state.filter.toLowerCase()) != -1){
          return (
            <TutorialBox key={tutorial._id} id={tutorial._id} category={tutorial.category} title={tutorial.title} />
          );
        }
      }

    });

    return (
      <div>
        <SearchTutorials filter={this.filterResults.bind(this)}/>
        <ul className="thumbnails">
          {sortBy(tutorials, 'key').reverse()}
        </ul>
      </div>
    )

  }

  filterResults(filterText){
    this.setState({
      filter: filterText
    });
  }
}
