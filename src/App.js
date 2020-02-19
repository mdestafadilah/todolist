import React, { Component } from "react";
import "./App.css";
import FontAwesome from "react-fontawesome";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      input: "",
      isEditing: false
    };
  }
  onEditing = () => {};
  onChange = e => {};
  onSubmit = e => {};
  onClick = id => {};
  onDelete = id => {};

  render() {
    return (
      <form id="todo-list">
        {this.state.items.length < 0 ? (
          <span className="todo-wrap">
            <span>
              <input type="checkbox" />
              <label for="1" className="todo">
                <FontAwesome className="fa fa-check" />
              </label>
            </span>

            <span className="delete-item" title="remove">
              <FontAwesome className="fa fa-times-circle" />
            </span>
          </span>
        ) : (
          <p></p>
        )}
        <span className="todo-wrap">
          <input />
        </span>
        <div id="add-todo">
          <FontAwesome className="fa fa-plus" /> &nbsp; Add an Item
        </div>
      </form>
    );
  }
}
