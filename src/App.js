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
      progress: 0,
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
    const item = {
      id: new Date().getTime(),
      text: this.state.input,
      isCompleted: false,
    };

    if (!this.state.input.length) {
      return false;
    }

    this.setState(
      (state) => ({
        items: state.items.concat(item),
        input: "",
      }),
      () => this.setProgress(this.state.items)
    );
  };
  onClick = (id) => {
    let updated = this.state.items.map((item) => {
      if (item.id === id) {
        item.isCompleted = !item.isCompleted;
      }
      return item;
    });
    this.setState(
      {
        items: updated,
      },
      () => this.setProgress(updated)
    );
  };
  onDelete = (id) => {
    let filtered = this.state.items.filter((item) => {
      if (item.id !== id) {
        return item;
      }
    });
    this.setState({ items: filtered }, () => this.setProgress(filtered));
  };

  setProgress = (items) => {
    let checked = items.filter((item) => {
      return item.isCompleted;
    });

    let progress = checked.length / items.length;

    this.setState({
      progress: Math.floor(progress * 100),
    });
  };

  render() {
    return (
      <form id="todo-list" onSubmit={(e) => this.onSubmit(e)}>
        <div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            aria-valuenow="25"
            aria-valuemin="0"
            style={{ width: this.state.progress + "%" }}
          >
            {this.state.progress + "%"}
          </div>
        </div>
        {this.state.items.length > 0 ? (
          this.state.items.map((item, key) => {
            return (
              <span className="todo-wrap" key={key}>
                <span onClick={() => this.onClick(item.id)}>
                  <input type="checkbox" checked={item.isCompleted} />
                  <label htmlFor={key} className="todo">
                    <FontAwesomeIcon icon={faCheck} /> {item.text}
                  </label>
                </span>

                <span
                  className="delete-item"
                  title="remove"
                  onClick={() => this.onDelete(item.id)}
                >
                  <FontAwesomeIcon icon={faCircle} />
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
