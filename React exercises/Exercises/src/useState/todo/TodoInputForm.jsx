import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TodoInputForm = ({ setData }) => {
  const [inputText, setInputText] = useState("");
  const [label, setLabel] = useState("");

  const addNewTodo = ()=>{
      setData( currList => {
          const todoAlreadyExists = currList.find(todo=>todo.title === inputText);
          if(todoAlreadyExists) return [...currList]
          else{
              return([...currList,{
                id: uuidv4(),
                title: inputText,
                label: label,
                isDone: false,
                isPinned: false
              }])
          }
      } )
  }

  return (
    <div className="d-flex gap-sm">
      <div className="w-100 flex-col">
        <input
          onChange={(e) => setInputText(e.target.value)}
          className="tr-input-item"
          value={inputText}
          placeholder="Todo item"
          required
        />
        <input
          onChange={(e) => setLabel(e.target.value)}
          className="tr-input-item"
          value={label}
          placeholder="Todo label"
          required
        />
      </div>
      <button
        onClick={addNewTodo}
        className="tr-btn tr-btn-primary align-s-center"
      >
        Add
      </button>
    </div>
  );
};

export default TodoInputForm;
