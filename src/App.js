/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faCheck, faCircle } from "@fortawesome/free-solid-svg-icons";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      input: "",
      isEditing: false,
    };
  }
  onEditing = () => {
    this.setState({ isEditing: true });
  };
  onChange = (e) => {
    console.log(e.target.value);
    this.setState({ input: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.setState((state) => ({
      items: state.items.concat(this.state.input),
      input: "",
    }));
    console.log(this.state.input);
  };
  onClick = (id) => {};
  onDelete = (id) => {};

  render() {
    return (
      <form id="todo-list" onSubmit={(e) => this.onSubmit(e)}>
        {this.state.items.length > 0 ? (
          this.state.items.map((item, key) => {
            return (
              <span className="todo-wrap" key={key}>
                <span>
                  <input type="checkbox" />
                  <label htmlFor={key} className="todo">
                    <FontAwesomeIcon icon={faCheck} /> {item}
                  </label>
                </span>

                <span className="delete-item" title="remove">
                  <FontAwesomeIcon icon={faCheck} />
                </span>
              </span>
            );
          })
        ) : (
          <p></p>
        )}
        {this.state.isEditing ? (
          <span className="todo-wrap">
            <input
              value={this.state.input}
              onChange={(e) => this.onChange(e)}
            />
          </span>
        ) : (
          false
        )}
        {/* <div id="add-todo"> */}
        <FontAwesomeIcon icon={faPlus} /> &nbsp;
        <a id="add-todo" onClick={() => this.onEditing()}>
          Add an Item
        </a>
        {/* </div> */}
      </form>
    );
  }
}
