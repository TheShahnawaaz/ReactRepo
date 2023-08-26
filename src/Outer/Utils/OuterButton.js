import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

export default function OuterButton(props) {
    const history = useNavigate();

    function handleClick() {
        console.log('The link was clicked.');
        // Redirect to another page
        history(props.redirect);
    }

    return (
        <button className='outer-button' name={props.name} value={props.value} onClick={handleClick}>
            {props.label}
        </button>
    );
}
