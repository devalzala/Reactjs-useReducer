import React, { useReducer, useState } from "react";
import Todo from "./Todo";

export const ACTIONS = {
  ADD_TODO: "add-todo",
  TOGGLE_TODO: "toggle-todo",
  REMOVE_TODO: "remove-todo",
};

function reducer(todos, action) {
  // check for action type
  switch (action.type) {
    // to add data
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)];

    // to complete the task
    case ACTIONS.TOGGLE_TODO:
      return todos.map((todo) => {
        if (todo?.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
      });

    // to remove the task
    case ACTIONS.REMOVE_TODO:
      return todos.filter((todo) => todo?.id !== action?.payload?.id);
  }
}

function newTodo(name) {
  return { id: Date.now(), name: name, complete: false };
}

const App = () => {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");

  // submit function
  const handleSubmit = (e) => {
    e.preventDefault();

    // pass the type and payload of the reducer
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name } });
    setName("");
  };

  return (
    <>
      <h1>A Simple Todo App using useReducer hook</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{width: "50%"}}
        />
      </form>
      {todos &&
        todos.map((todo, index) => (
          <Todo key={index} todo={todo} dispatch={dispatch} />
        ))}
    </>
  );
};

export default App;
