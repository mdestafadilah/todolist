export const actions = {
  ADD_TODO: "ADD_TODO",
  TOGGLE_TODO: "TOGGLE_TODO",
  REMOVE_TODO: "REMOVE_TODO",
};

const uid = Math.random().toString(34).slice(2);
export function addTodo(text) {
  return {
    type: actions.ADD_TODO,
    payload: { id: uid, text: text, isCompleted: false },
  };
}

export function toggleTodo(id) {
  return {
    type: actions.TOGGLE_TODO,
    payload: { id: id },
  };
}

export function removeTodo(id) {
  return {
    type: actions.REMOVE_TODO,
    payload: id,
  };
}
