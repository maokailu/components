import React from 'react';
import './style.scss';

export default class BackTop extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showBackTop: false
        };
    }
    componentDidMount() {
        window.addEventListener('scroll', this.showBackTop);
    }
    showBackTop = () => {
        // 当滚动距离 > 1/4页面高度时展示回到顶部
        // webkit: document.body.scrollTop; others: document.documentElement.scrollTop
        const osTop = document.documentElement.scrollTop || document.body.scrollTop;
        const clientHeight = document.documentElement.clientHeight;
        const showBackTop = osTop > clientHeight / 4;
        this.setState({
            showBackTop: showBackTop
        });
    }
    backTop = () => {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div className="back_top"
                style={{ display: this.state.showBackTop ? 'block' : 'none' }}
                onClick = {this.backTop}>
        回到顶部
            </div>
        );
    }
}
