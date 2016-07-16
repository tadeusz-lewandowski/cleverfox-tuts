import React from 'react';
import qwest from 'qwest';
import {hashHistory} from 'react-router';

export default class EditTutorial extends React.Component{

  constructor(){
    super();
    this.state = {
      tutorial: {}
    };
  }
  componentDidMount(){

    var self = this;


    console.log(this.props.params.id);

    qwest.get('http://localhost:4000/api/tutorials/' + this.props.params.id)
  	  .then(function(xhr, response) {
        console.log(response);
        self.setState({ tutorial: response});
	    });



    this.refs.myButton.addEventListener('click', ()=>{
      var title = this.refs.title.value;
      var category = this.refs.category.value;
      var content = this.refs.content.value;

      if(title != undefined && category != undefined && content != undefined){
        if(title != '' && category != '' && content != ''){

          qwest.map('PUT', 'http://localhost:4000/api/tutorials/' + this.props.params.id, {title: title, category: category, content: content})
           .then(function() {
             hashHistory.push('/tutorials');
           });

        }
      }

    });
  }
  render(){
    if(Object.getOwnPropertyNames(this.state.tutorial).length != 0){
      this.refs.title.value = this.state.tutorial.title;
      this.refs.category.value = this.state.tutorial.category;
      this.refs.content.value = this.state.tutorial.content;
    }


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
        <button ref='myButton'>Update</button>
      </div>
    )
  }
}
