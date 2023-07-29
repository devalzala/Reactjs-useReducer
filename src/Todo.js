import React from "react";
import { ACTIONS } from "./App";

const Todo = ({ todo, dispatch }) => {
  return (
    <div style={{ width: "50%" }}>
      <div style={{ color: todo?.complete ? "red" : "black" }}>{todo.name}</div>
      <button
        onClick={() =>
          dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo?.id } })
        }
      >
        Toggle
      </button>
      <button
        onClick={() =>
          dispatch({ type: ACTIONS.REMOVE_TODO, payload: { id: todo?.id } })
        }
      >
        Delete
      </button>
    </div>
  );
};

export default Todo;
