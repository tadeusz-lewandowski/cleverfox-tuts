import React from 'react';
import qwest from 'qwest';

export default class NewTutorial extends React.Component{

  componentDidMount(){
    this.refs.myButton.addEventListener('click', ()=>{
      var title = this.refs.title.value;
      var category = this.refs.category.value;
      var content = this.refs.content.value;

      if(title != undefined && category != undefined && content != undefined){
        if(title != '' && category != '' && content != ''){
          qwest.post('/api/tutorials', {
            title: title,
            category: category,
            content: content
          })
          .then((xhr, response)=> {
            console.log(response);
            this.refs.title.value = '';
            this.refs.content.value = '';
          })
          .catch(function(e, xhr, response) {
            console.log(e);
          });
        }
      }

    });
  }
  render(){
    return (
      <div>
        <label>Title</label>
        <input type='text' ref='title' className="form-control"/>
        <label>Category</label>
        <select ref='category' className="form-control">
          <option>C++</option>
          <option>Python</option>
          <option>Ruby</option>
          <option>JS</option>
          <option>JSON</option>
        </select>
        <label>Content</label>
        <textarea rows="4" cols="50" ref='content' className="form-control"></textarea>
        <button ref='myButton' className='btn btn-success'>Create</button>
      </div>
    )
  }
}
