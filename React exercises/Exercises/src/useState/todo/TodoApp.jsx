import React, { useState } from "react";
import {v4 as uuidv4} from 'uuid';
import TodoInputForm from "./TodoInputForm";
import TodoList from "./TodoList";
import TodoLabels from "./SelectLabelsToShow";
const TodoApp = () => {
  const [todos, setTodos] = useState([
    {
      id: uuidv4(),
      label: "general",
      title: "sleep",
      isDone: true,
      isPinned: false
    }
  ]);

  const [labelToShow, setLabelToShow] = useState("");

  const pinnedTodos = todos.filter((todo) => todo.isPinned);
  const todoLabels = todos.reduce(
    (acc, curr) => (acc.includes(curr.label) ? [...acc] : [...acc, curr.label]),
    []
  );
  console.log(todoLabels);
  const deleteTodoItem = (id) => {
    setTodos((curr) => curr.filter((item) => item.id !== id));
  };

  const toggleProperty = (id, property) => {
    setTodos((curr) =>
      curr.map((item) =>
        item.id === id ? { ...item, [property]: !item[property] } : { ...item }
      )
    );
  };

  return (
    <div className=" flex-col pd-lg w-70 mr-x-auto mr-y-lg bs-lighter">
      <TodoInputForm setData={setTodos} />
      <TodoLabels labels={todoLabels} setLabel={setLabelToShow} />
      <TodoList
        todos={pinnedTodos}
        todoTitle="Pinned Todos"
        toggleProperty={toggleProperty}
        deleteTodoItem={deleteTodoItem}
      />
      <TodoList
        todos={todos}
        todoTitle="Normal Todos"
        toggleProperty={toggleProperty}
        deleteTodoItem={deleteTodoItem}
      />
    </div>
  );
};

export default TodoApp;
