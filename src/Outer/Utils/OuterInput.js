import React from 'react'

export default function OuterInput(props) {
    return (
        <div class="outer-input-container">
            <div class="outer-input-icon">
                {props.children}
            </div>
            <input class="outer-input-field" type={props.type} placeholder={props.placeholder} name={props.name} />
        </div>
    )
}
