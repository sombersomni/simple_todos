import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Todo from './Todo.jsx';

const TodosContainer = styled.div`
    min-width: 300px;
    width: 400px;
    background: ${props => props.primaryColor || '#666'};
    border-radius: 0px 0px 10px 10px;
    margin: 0px 20px;
`;

const AddButton = styled.button`
    width: 30%;
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

const InputContainer = styled.form`
    display: flex;
    flex-direction: row;
    height: 40px;
    width: 100%;
`;
const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
`;

const ListItem = styled.div`
    margin-top: 5px;
    list-style: none;
    text-align: left;
`;

const Instructions = styled.div`
    background: white;
    padding: 10px 0px;
    padding-bottom: 20px;
    border-radius: 0px 0px 10px 10px;
`;

const DetailContainer = styled.div`
    min-width: 250px;
    width: 400px;
    margin: 20px;
`;

export default function Todos({ primaryColor }) {
    const [todos, setTodos] = useState(['Walk the dog']);
    const inputRef = useRef(null);
    const inputStyle = {
        width: '70%',
        borderRadius: '5px 0px 0px 5px',
        padding: 5,
        border: `2px solid ${primaryColor}`,
        fontStyle: 'italic'
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
            <DetailContainer>
                    <InputContainer onSubmit={e => {
                            e.preventDefault();
                            setTodos(todos.concat(inputRef.current.value.trim()));
                            inputRef.current.value = '';
                        }}>
                        <input
                            style={inputStyle}
                            type='text'
                            ref={inputRef}
                            placeholder="Create a todo" />
                        <AddButton type='submit'>
                            Add Todo
                </AddButton>
                </InputContainer>
                <Instructions>
                    <h4 style={{
                        marginBottom: 5,
                        marginTop: -5,
                        fontStyle: 'italic'
                    }}>Instructions :</h4>
                    <div style={{
                        padding: '0px 10px'
                    }}>

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
                    </div>
                </Instructions>
            </DetailContainer>
            <TodosContainer
                primaryColor={primaryColor}>
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