import React from 'react';

export default class LoggedInButton extends React.Component {

  render() {
    return (
      <span onClick={this.clickFunction} id='sign-in-button'>{this.props.username}</span>
    )
  }

  clickFunction(){
    var dropdowns = document.getElementById('dropdowns');
    if(dropdowns.hasAttribute('style')){
      if(dropdowns.style.display == 'none'){
        dropdowns.style.display = 'block';
      } else{
        dropdowns.style.display = 'none';
      }
    } else{
      dropdowns.style.display = 'block';
    }

  }
}
