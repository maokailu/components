import React from 'react';
import './style.scss';
export const Loading = props => {
    return (
        <div className = "loading-box">
            <div className={props.type}></div>
        </div>
    );
};
Loading.defaultProps = {
    type: 'dot'
};
// type: 'dot' || 'line'

