import React from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;  
`;

const ListItem = styled.li`
    margin-top: 5px;
    list-style: none;
    text-align: left;
`;
export default function TitleMenu() {
    return (
        <TitleContainer>
            <h1 style={{ fontFamily: '' }}>Todo Demo</h1>
            <h3>Keep track of what you need to do for the day with this app</h3>
            <h5 style={{ marginBottom: -10 }}>Instructions</h5>
            <ul>
                <ListItem>
                    <FontAwesomeIcon 
                        style={{ color: '#AA002C' }}
                        icon={['fal', 'times-circle']}/> 
                    &nbsp;
                    Click to remove todo
                </ListItem>
                <ListItem>
                    <FontAwesomeIcon 
                        style={{ color: '#00AF22' }}
                        icon={['fal', 'check-circle']}/> 
                    &nbsp;
                    Click a todo to mark as completed
                </ListItem>
                <ListItem>
                    <FontAwesomeIcon 
                        style={{ color: '#AA002C' }}
                        icon={['fal', 'ban']}/> 
                    &nbsp;
                    Click a todo again to mark as canceled
                </ListItem>
            </ul>
        </TitleContainer>
    )
}