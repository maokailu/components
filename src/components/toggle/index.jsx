import React, { useState } from 'react';
import './style.scss';
export function Toggle() {
    const [toggle, setToggle] = useState(false);
    return (
        <span className="toggle-button" onClick={()=>setToggle(!toggle)}>
            <span className="icon-circle"></span>
        </span>
    );
}
