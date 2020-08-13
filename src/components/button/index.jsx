import React, { useState, useEffect } from 'react';
import './style.scss';
import classNames from 'classnames';

export default function Button(props) {
    const [selected, setSelected] = useState(false);
    const [count, setCount] = useState(0);
    const buttonStyle = classNames({
        'selected': selected,
        'unselected': !selected,
        'button': true
    });
    useEffect(() => {
        document.title = `You clicked ${count} times`;
    });
    return (
        <div ref={props.inputRef}
            className={ buttonStyle}
            onTouchStart={ ()=>setSelected(true) }
            onTouchEnd = { ()=> setSelected(false) }>
            {props.text || 'Search'}
        </div>
    );
}
