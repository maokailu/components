import React from 'react';

import { createToast } from './toast-v3/createToast';
export default class Demo extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.toast = createToast();
    }
    render() {
        return (
            // eslint-disable-next-line react/react-in-jsx-scope
            <div onClick={()=>this.toast()}>clickme</div>
        );
    }
}
