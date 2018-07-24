import React from 'react';
import './style.scss';
export const Nodata = props => {
    return (
        <div className = {props.type}>
            <div>
                <img src = { props.src } />
                <div className = "tip" >{props.tip}</div>
            </div>
        </div>
    );
};
Nodata.defaultProps = {
    type: 'no-result',
    src: 's',
    tip: 'Oops!No any data'
};
// type: 'dot' || 'line'
