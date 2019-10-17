import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { config } from 'react-spring';
import { Spring } from 'react-spring/renderprops';
//components
import ArrowTooltip from './Tooltips.jsx';

const TodoContainer = styled.div`
    background: ${props => props.primaryColor || '#e9ffff'};
    border-radius: ${props => props.last ? '0px 0px 10px 10px' : '0px'};
    padding: 5px 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justity-content: left;
    opacity: 1;
    transition: opacity 1s;
    cursor: pointer;
    &:hover {
        opacity: 0.8;
    }
`;
const TodoText = styled.div`
    text-transform: capitalize;
    margin-left: 10px;
    color: ${props => props.status === 'ban' ? '#AA002C' : 'black'}
    text-decoration: ${props => props.status === 'check-circle' ? 'line-through' : 'none'}
`;
const IconContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: no wrap;
`;

const Button = styled.div`
    opacity: 1;
    transition: opacity 1s;
    cursor: pointer;
    padding: 5px;
    &:hover {
        opacity: 0.6;
    }
`;
export default function Todo({ todo, last, i, removeTodo, primaryColor }) {
    const [status, setStatus] = useState('circle');
    const style = {
        color: setColor(status)
    }
    function setColor(name) {
        switch (name) {
            case 'check-circle':
                return '#00AF22';
            case 'ban':
                return '#AA002C';
            default:
                return '#222';
        }
    }
    function setTitle(name) {
        switch (name) {
            case 'check-circle':
                return 'completed';
            case 'ban':
                return 'canceled';
            default:
                return 'in progress';
        }
    }

    function toggleOptions(name) {
        switch (name) {
            case 'circle':
                setStatus('check-circle')
                break;
            case 'check-circle':
                setStatus('ban')
                break;
            default:
                setStatus('circle')
                break;
        }
    }
    const iconSize = 1;
    return (
        <Spring
            config={config.wobbly}
            from={{ opacity: 0, height: 0 }}
            to={{ opacity: 1, height: 'auto' }}>
            {props => (<TodoContainer
                primaryColor={primaryColor}
                last={last}
                onClick={() => { toggleOptions(status) }}
                style={{...props}}>
                <IconContainer>
                    <ArrowTooltip title='close'>
                        <Button>
                            <FontAwesomeIcon
                                onClick={() => { removeTodo(i) }}
                                size={`${iconSize}x`}
                                style={{ color: '#AA002C' }}
                                icon={['fal', 'times-circle']} />
                        </Button>
                    </ArrowTooltip>
                    <ArrowTooltip title={setTitle(status)}>
                        <Button>
                            <FontAwesomeIcon
                                size={`${iconSize}x`}
                                style={style}
                                icon={['fal', status]} />
                        </Button>
                    </ArrowTooltip>
                </IconContainer>
                <TodoText status={status}>
                    {todo}
                </TodoText>
            </TodoContainer>)}
        </Spring>

    )
}