import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Todo from './Todo.jsx';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckCircle, faCircle, faBan, faTimesCircle } from '@fortawesome/pro-light-svg-icons'
library.add(faCheckCircle, faCircle, faBan, faTimesCircle);

const TodosContainer = styled.div`
    min-width: 300px;
    background: #666;
    border-radius: 0px 0px 10px 10px;
    transform: translateY(50%);
`;

const AddButton = styled.button`
    padding: 10px;
    text-transform: capitalize;
    border-radius: 0px 5px 5px 0px;
    background: #009ACF;
    border: none;
    opacity: 1;
    transition: opacity 1s;
    &:hover {
        opacity: 0.7;
    }
`;

const InputContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

export default function Todos() {
    const [todos, setTodos] = useState(['Walk the dog']);
    const inputRef = useRef(null);
    const inputStyle = {
        borderRadius: '5px 0px 0px 5px',
        padding: 5,
        border: '2px solid #999'
    }

    useEffect(() => {
        inputRef.current.focus();
    })

    function removeTodo(i) {
        if(todos.length > 0) {
            let newTodos = todos.slice()
            newTodos.splice(i, 1);
            console.log(newTodos);
            setTodos(newTodos);
        }
    }
    return (
        <React.Fragment>
            <InputContainer>
                <input 
                    style={inputStyle}
                    type='text' 
                    ref={inputRef} 
                    placeholder="Enter a task"/>
                <AddButton onClick={() => { 
                    setTodos(todos.concat(inputRef.current.value.trim()))
                    inputRef.current.value = '';
                    }}>
                    Add Todo
                </AddButton>
            </InputContainer>
            <TodosContainer>
                <h1>Todos</h1>
                { todos.map((todo, i) => <Todo 
                    removeTodo={removeTodo}
                    i={i}
                    key={i.toString()} 
                    last={i === todos.length - 1}
                    todo={todo} />)}
            </TodosContainer>
        </React.Fragment>
    )
}