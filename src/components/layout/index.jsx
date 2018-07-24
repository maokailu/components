import React from 'react';
import './style.scss';
const ElasticVertical = () => {
    return (
        <div className="elastic-vertical">
            <div className="header">Header</div>
            <div className="content">Content</div>
            <div className="footer">Footer</div>
        </div>
    );
};
const ElasticHorizantal = () => {
    return (
        <div className="elastic-horizantal">
            <div className="left">Header</div>
            <div className="main">Content</div>
            <div className="right">Footer</div>
        </div>
    );
};
export {
    ElasticVertical,
    ElasticHorizantal
};
