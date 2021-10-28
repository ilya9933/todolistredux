import './Todo.style.css';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const Todo = ({ todo, toggleTask, removeTask, editTask }) => {
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState(todo.task);
  const taskEditing = () => {
    setEdit(!edit);
  }
  const handleChangeTask = (e) => {
    setText(e.currentTarget.value);
  }
  const handleEditTask = (e) => {
    if (e.key === 'Enter') {
      editTask(todo.id, text);
      setEdit(!edit);
    }
  }
  return (
    <div
      key={todo.id}
      className="todoitem"
    >
      {!edit && (
        <input
          className="todocheckbox"
          checked={todo.complete ? true : false}
          type="checkbox"
          onChange={() => toggleTask(todo.id)}
        />
      )}
      {!edit && (
        <label
          className={todo.complete ? "item-text disactive" : "item-text active"}
          onDoubleClick={taskEditing}
        >
          {todo.task}
        </label>
      )}
      {edit && (
        <input
          value={text}
          type="text"
          className="todo-edit-panel"
          onChange={handleChangeTask}
          onKeyDown={handleEditTask}
          autoFocus=""
        />
      )}
      {!edit && (
        <div
          className="todo-delete"
          onClick={() => removeTask(todo.id)}
        >
          x
        </div>
      )}
    </div>
  )
}

export default Todo;