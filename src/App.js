import React from 'react';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      input: '',
      isEditing: false
    }
  }
  onEditing = () => { }
  onChange = e => { }
  onSubmit = e => { }
  onClick = id => { }
  onDelete = id => { }
  render() {
    return (
      <form id="todo-list">
         
        { this.state.items.length < 0 ?
        <span className="todo-wrap">
          <span >
            <input type="checkbox"  />
            <label for="1" className="todo"><i className="fa fa-check"></i></label>
          </span>
       
          <span className="delete-item" title="remove" >
            <i className="fa fa-times-circle"></i>
          </span> 
        </span> : <p></p>
        }
        <span className="todo-wrap" ><input /></span>
        <div id="add-todo"><i className="fa fa-plus"></i> &nbsp; Add an Item</div>
      </form>
    );
  }
}
