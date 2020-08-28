import React, { Component } from 'react';
const withInterval = WrappedComponent =>
    // eslint-disable-next-line react/display-name
    class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                second: 0
            };
        }
        componentDidMount() {
            this.interval = setInterval(()=>{
                this.setState({
                    second: this.state.second + 1
                });
            }, 1000);
        }
        componentWillUnmount() {
            clearInterval(this.interval);
        }
        render() {
            return <WrappedComponent second={this.state.second} />;
        }
    };

export default withInterval;
