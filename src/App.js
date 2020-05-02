/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";

const List = (props) => {
  const { items, onClick, onDelete } = props;
  if (items.length > 0) {
    let list = items.map((item, key) => {
      return (
        <span className="todo-wrap" key={key}>
          <span onClick={() => onClick(item.id)}>
            <input type="checkbox" checked={item.isCompleted} />
            <label htmlFor={key} className="todo">
              <FontAwesomeIcon icon={faCheck} /> {item.text}
            </label>
          </span>

          <span
            className="delete-item"
            title="remove"
            onClick={() => onDelete(item.id)}
          >
            <FontAwesomeIcon icon={faTrash} />
          </span>
        </span>
      );
    });
    return list;
  }
  return <p>No Item in the List</p>;
};

const Input = (props) => {
  const { isEditing, input, onChange } = props;
  if (isEditing) {
    return (
      <span className="todo-wrap">
        <input value={input} onChange={(e) => onChange(e)} />
      </span>
    );
  }
  return false;
};

const Progress = (props) => {
  const { progress } = props;
  return (
    <div className="progress">
      <div
        className="progress-bar"
        role="progressbar"
        aria-valuenow="25"
        aria-valuemin="0"
        style={{ width: progress + "%" }}
      >
        {progress + "%"}
      </div>
    </div>
  );
};
const Add = (props) => {
  const { onEditing } = props;
  return (
    <div>
      <FontAwesomeIcon icon={faPlus} /> &nbsp;
      <a id="add-todo" onClick={() => onEditing()}>
        Add an Item
      </a>
    </div>
  );
};

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

  componentDidMount() {
    let all =
      localStorage.getItem("item") != null
        ? JSON.parse(localStorage.getItem("item"))
        : [];
    this.setState({ items: all }, () => this.setProgress(this.state.items));
  }

  componentDidUpdate() {
    localStorage.setItem("item", JSON.stringify(this.state.items));
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
        <Progress {...this.state} />
        <List {...this.state} onClick={this.onClick} onDelete={this.onDelete} />
        <Input {...this.state} onChange={this.onChange} />
        <Add onEditing={this.onEditing} />
      </form>
    );
  }
}
