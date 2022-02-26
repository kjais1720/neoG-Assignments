import React from "react";
import { v4 as uuidv4 } from "uuid";

const TodoList = (props) => {
  const { todos, todoTitle, toggleProperty, deleteTodoItem } = props;
  return (
    <ul className="flex-col">
      <h3>{todos[0] && todoTitle}</h3>
      {todos[0] &&
        todos.map((todo) => (
          <li key={uuidv4()} className="pd-sm p-rel d-flex justify-c-space-between">
            <div class="w-100"><span>{todo.label}</span></div>
            <div class="d-flex justify-c-space-between">
                <span
                  style={{
                    textDecoration: todo.isDone ? "line-through" : "none"
                  }}
                >
                  {todo.title}
                </span>
                <div className="d-flex gap-md">
                  <button
                    onClick={() => toggleProperty(todo.id, "isPinned")}
                    className="tr-btn tr-btn-icon"
                  >
                    <i className="fas fa-thumbtack txt-md"></i>
                  </button>
                  <button
                    onClick={() => toggleProperty(todo.id, "isDone")}
                    className="tr-btn tr-btn-primary txt-sm pd-xs"
                  >
                    {todo.isDone ? "uncheck" : "check"}
                  </button>
                  <button
                    onClick={() => deleteTodoItem(todo.id)}
                    className="tr-btn tr-btn-secondary txt-sm pd-xs"
                  >
                    Delete
                  </button>
                </div>
            </div>
          </li>
        ))}
    </ul>
  );
};

export default TodoList;
