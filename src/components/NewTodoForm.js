import React, { useState } from "react";
import { connect } from "react-redux/es/exports";
import './NewTodoForm.css';
import { addTodoRequest } from "./thunks";

const NewTodoForm = ({todos, onCreatePressed}) => {
    const [inputValue, setInputValue] = useState('');
    return (
        <div className="new-todo-form">
            <input 
                type="text" 
                value={inputValue}
                placeholder="Type your new todo here"
                onChange={ e => setInputValue(e.target.value)} 
                className="new-todo-input" />
            <button 
                onClick={() => {
                    const isDuplicateText = todos.some(todo => todo.text === inputValue );
                    if(!isDuplicateText){
                        onCreatePressed(inputValue);
                        setInputValue('');
                    }
                }}
                className="new-todo-button">Create Todo</button>
        </div>
    )
}

const mapStateToProps = state => ({
    todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
    onCreatePressed: text => dispatch(addTodoRequest(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);