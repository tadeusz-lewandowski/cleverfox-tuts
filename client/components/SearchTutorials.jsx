import React from 'react';

export default class SearchTutorials extends React.Component {

  changeHandler(event){
    this.props.filter(event.target.value);
  }

  render() {
    return (
      <input type="text" className="search" placeholder="Click to search tutorials" onChange={this.changeHandler.bind(this)}/>
    )
  }
}
