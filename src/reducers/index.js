import { actions } from "../actions";

const { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } = actions;

const initialState = {
  todos: [],
};

export default function todoApp(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return Object.assign({}, state, {
        todos: [
          ...state.todos,
          {
            id: action.payload.id,
            text: action.payload.text,
            isCompleted: false,
          },
        ],
      });

    case TOGGLE_TODO:
      return Object.assign({}, state, {
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return Object.assign({}, todo, { isCompleted: !todo.isCompleted });
          }
          return todo;
        }),
      });

    case REMOVE_TODO:
      return Object.assign({}, state, {
        todos: state.todos.filter((todo) => {
          return !todo.isCompleted;
        }),
      });

    default:
      return state;
  }
}
