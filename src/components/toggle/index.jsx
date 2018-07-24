import React from 'react';
import './style.scss';
export class Toggle extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        toggle: false
    };
    componentDidMount() {
    }
    toggle = () => {
        this.setState(prevState =>({
            toggle: !prevState.toggle
        }));
    }
    render() {
        return (
            <span className="toggle-button" onClick={this.toggle}>
                <span className="icon-circle"></span>
            </span>
        );
    }
}
