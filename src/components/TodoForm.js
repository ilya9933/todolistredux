import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './TodoForm.style.css';

import { addTodo } from '../store/actions';

const TodoForm = ({ addTask, length, selectAllTasks }) => {
    const dispatch = useDispatch();

    const [userInput, setUserInput] = useState("");
    const [tasksSelect, setTasksSelect] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        // dispatch(addTodo({
        //     title: userInput,
        //     id: Date.now(),
        // }));
        setUserInput("");
    }

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value);
    }

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSubmit(e);
        }
    }

    const tasksAll = () => {
        selectAllTasks(tasksSelect);
        setTasksSelect(!tasksSelect);
    }

    return (
        <form className="todo-panel" onSubmit={handleSubmit}>
            {length > 0 &&
                <input
                    className="selectAll"
                    type="checkbox"
                    onChange={tasksAll}
                ></input>}
            <input
                className="main-todo-panel"
                value={userInput}
                type="text"
                onChange={handleChange}
                onKeyDown={handleKeyPress}
                placeholder="What need to be done?"
                autoFocus=""
            ></input>
        </form>
    )
}

export default TodoForm;