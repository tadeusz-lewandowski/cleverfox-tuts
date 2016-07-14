import React from 'react';

export default class TableTutorials extends React.Component{

  render(){
    var rows = this.props.resources.map(function(item){
      return (
        <tr key={item._id}>
          <td>{item.title}</td>
          <td>{item.category}</td>
          <td>{item.content.slice(0, 6) + '...'}</td>
          <td>{item.date}</td>
        </tr>
      )
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Category</th>
            <th>Content</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    )
  }
}
