import React from 'react';
import './style.scss';
export default class ProgressBar extends React.Component {
    constructor() {
        super();
        this.state = {
        };
    }
    render() {
        return (
            <div className="process-bar">
                <div className="circle"></div>
                {[0, 0, 0, 0, 0].map((item, index)=>{
                    return (
                        <div key={index} className="ceil">
                            <div className = { (index <= this.state.process) ? 'bar green' : 'bar gray'}></div>
                            <div className = { (index <= this.state.process) ? 'circle green' : 'circle gray'}></div>
                        </div>
                    );
                })
                }
            </div>
        );
    }
}
