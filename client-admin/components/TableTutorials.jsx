import React from 'react';
import ButtonDelete from './ButtonDelete.jsx';
import ButtonUpdate from './ButtonUpdate.jsx';

export default class TableTutorials extends React.Component{

  render(){
    var self = this;
    var rows = this.props.resources.map(function(item){
      return (
        <tr key={item._id}>
          <td>{item.title}</td>
          <td>{item.category}</td>
          <td>{item.content.slice(0, 6) + '...'}</td>
          <td>{item.date}</td>
          <td><ButtonDelete id={item._id} update={self.props.update} /></td>
          <td><ButtonUpdate id={item._id} /></td>
        </tr>
      )
    });

    return (
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>Title</th>
            <th>Category</th>
            <th>Content</th>
            <th>Date</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    )
  }
}
