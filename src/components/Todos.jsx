import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Todo from './Todo.jsx';

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
const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const ListItem = styled.li`
    margin-top: 5px;
    list-style: none;
    text-align: left;
`;

const Instructions = styled.div`

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
        if (todos.length > 0) {
            let newTodos = todos.slice()
            newTodos.splice(i, 1);
            console.log(newTodos);
            setTodos(newTodos);
        }
    }
    return (
        <Container>
            <InputContainer>
                <input
                    style={inputStyle}
                    type='text'
                    ref={inputRef}
                    placeholder="Enter a task" />
                <AddButton onClick={() => {
                    setTodos(todos.concat(inputRef.current.value.trim()))
                    inputRef.current.value = '';
                }}>
                    Add Todo
                </AddButton>
                <Instructions>
                    <h5 style={{ marginBottom: -10 }}>Instructions</h5>
                    <ul>
                        <ListItem>
                            <FontAwesomeIcon
                                style={{ color: '#AA002C' }}
                                icon={['fal', 'times-circle']} />
                            &nbsp;
                            Click to remove todo
                </ListItem>
                        <ListItem>
                            <FontAwesomeIcon
                                style={{ color: '#00AF22' }}
                                icon={['fal', 'check-circle']} />
                            &nbsp;
                            Click a todo to mark as completed
                </ListItem>
                        <ListItem>
                            <FontAwesomeIcon
                                style={{ color: '#AA002C' }}
                                icon={['fal', 'ban']} />
                            &nbsp;
                            Click a todo again to mark as canceled
                </ListItem>
                    </ul>
                </Instructions>
            </InputContainer>
            <TodosContainer>
                <h2>Todos</h2>
                {todos.map((todo, i) => <Todo
                    removeTodo={removeTodo}
                    i={i}
                    key={i.toString()}
                    last={i === todos.length - 1}
                    todo={todo} />)}
            </TodosContainer>
        </Container>
    )
}