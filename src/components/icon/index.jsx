import React from 'react';
import './style.scss';

const  Loading = () => {
    return (
        <div className="loading-base">
            {new Array(8).fill(0).map((num, index) => <i key={index + 1} className={'pip' + (index + 1)} />)}
        </div>
    );
};
const  LoadingRing = () => {
    return (
        <div className="loading-ring">
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export {
    Loading,
    LoadingRing
};
