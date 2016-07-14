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
          qwest.post('http://localhost:4000/api/tutorials', {
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
        <input type='text' ref='title'/>
        <select ref='category'>
          <option>C++</option>
          <option>Python</option>
          <option>Ruby</option>
          <option>JS</option>
          <option>JSON</option>
        </select>
        <textarea rows="4" cols="50" ref='content'></textarea>
        <button ref='myButton'>Create</button>
      </div>
    )
  }
}
