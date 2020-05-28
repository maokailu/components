import React, { Fragment } from 'react';
import './style.scss';
export default class Item extends React.Component {
    constructor(props) {
        super(props);
        this.listRef = React.createRef();
        this.state = {
            list: [1]
        };
    }
    componentDidMount() {
        setTimeout(()=>{
            this.updateList();
        }, 8000);
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        const list = this.listRef.current;
        if (this.state.list.length > prevState.list.length) {
            return list.scrollHeight - list.scrollTop;
        }
        return null;
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (snapshot !== null) {
            const list = this.listRef.current;
            list.scrollTop = list.scrollHeight - snapshot;
        }
    }
    updateList = () => {
        const newlist = JSON.parse(JSON.stringify(this.state.list));
        newlist.push(Math.floor(Math.random() * 10));
        this.setState({
            list: newlist
        });
    };
    render() {
        return (
            <Fragment>
                <div ref={this.listRef} className="add-item">
                    {this.state.list.map(item => <div key={item}>{item}</div>)}
                    <div onClick={this.updateList}>add 1 item</div>
                </div>
            </Fragment>
        );
    }
}
