import React from 'react';

export default class Unauthorized extends React.Component{
  render(){
    return (
      <div>
        <input type='text'/>
        <input type='password'/>
        <button>Sign in</button>
      </div>
    )
  }
}
