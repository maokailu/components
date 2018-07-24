import React from 'react';
import './style.scss';
import classNames from 'classnames';

export class Button extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: false
        };
    }
    clickHandler = () => {
    };
    highlight = () => {
        this.setState(state => ({
            selected: !state.selected
        }));
    }
    restoreColor = () => {
        this.setState(state => ({
            selected: !state.selected
        }));
    }
    render() {
        const buttonStyle = classNames({
            'selected': this.state.selected,
            'unselected': !this.state.selected,
            'button': true
        });
        return (
            <div className={ buttonStyle}
                onClick = {this.clickHandler}
                onTouchStart={ this.highlight }
                onTouchEnd = { this.restoreColor }>
                {this.props.text || 'Search'}
            </div>
        );
    }
}

