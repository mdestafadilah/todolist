/* eslint-disable jsx-a11y/anchor-is-valid */
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
  onEditing = () => {
    this.setState({ isEditing: true });
  };
  onChange = e => {
    console.log(e.target.value);
    this.setState({ input: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    this.setState({
      items: this.state.items.concat(this.state.input),
      input: ""
    });
    console.log(this.state.input);
  };
  onClick = id => {};
  onDelete = id => {};

  render() {
    return (
      <form id="todo-list" onSubmit={e => this.onSubmit(e)}>
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
        {this.state.isEditing ? (
          <span className="todo-wrap">
            <input value={this.state.input} onChange={e => this.onChange(e)} />
          </span>
        ) : (
          false
        )}
        {/* <div id="add-todo"> */}
        <FontAwesome name="edit" className="fa fa-plus" /> &nbsp;
        <a id="add-todo" onClick={() => this.onEditing()}>
          Add an Item
        </a>
        {/* </div> */}
      </form>
    );
  }
}
