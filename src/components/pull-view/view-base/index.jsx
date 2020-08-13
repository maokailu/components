import React from 'react';
import './style.scss';
export default class PullView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: null,
            icon: null,
            data: null
        };
        this.touchStartHandler = this.touchStartHandler.bind(this);
        this.touchMoveHandler = this.touchMoveHandler.bind(this);
        this.touchEndHandler = this.touchEndHandler.bind(this);
        this.getJSON = this.getJSON.bind(this);
    }
    status = ['下拉刷新', '释放刷新', '正在刷新', '刷新成功', '刷新失败'];
    icons = ['arrow-down-triangle', 'arrow-up-triangle', 'loading', 'success', 'error'];
    initY = 0; // 滑动开始时的坐标
    currentY = 0; // 实时坐标
    spaceY = 0; // 滑动距离
    threshold = 40;
    pullRefreshHeight = 40;

    getJSON = url => {
        const promise = new Promise((resolve, reject) => {
            const handler = function() {
                if (this.readyState !== 4) {
                    return;
                }
                if (this.status === 200) {
                    resolve(this.response);
                } else {
                    reject(new Error(this.statusText));
                }
            };
            const client = new XMLHttpRequest();
            client.open('GET', url);
            client.onreadystatechange = handler;
            client.responseType = 'json';
            client.setRequestHeader('Accept', 'application/json');
            client.send();
        });
        return promise;
    };
    touchStartHandler(e) {
        var obj = e.target.parentNode;
        if (obj.className === 'box') {
            this.initY = e.targetTouches[0].pageY / 10;
        }
        this.setState({
            status: this.status[0],
            loadingShow: false,
            pullArrow: true,
            pushArrow: false,
            completed: false,
            unCompleted: false
        });
    }
    touchMoveHandler(e) {
        var obj = e.target.parentNode;
        if (obj.className === 'box') {
            this.currentY = e.targetTouches[0].pageY / 10;
            this.spaceY = this.currentY - this.initY;
            if (this.spaceY > 0) {
                console.log(obj.style)
                obj.style.WebkitTransform = 'translateY(' + (this.spaceY - this.pullRefreshHeight) + 'px)';
                if (this.spaceY > 0 && this.spaceY < this.threshold) {
                    this.setState({
                        status: this.status[0],
                        icon: this.icons[0]
                    });
                } else if (this.spaceY >= this.threshold) {
                    this.setState({
                        status: this.status[1],
                        icon: this.icons[1]
                    });
                }
            }
        }
    }
    touchEndHandler = e => {
        var obj = e.target.parentNode;
        if (obj.className === 'box') {
            this.endY = obj.style.WebkitTransform.replace(/translateY\(/g, '').replace(/px\)/g, '') * 1;
            if (this.state.status === this.status[1]) {
                obj.style.WebkitTransform = 'translateY(' + 0 + 'px)';
                this.setState({
                    status: this.status[2],
                    icon: this.icons[2]
                });

                this.getJSON('http://freegeoip.net/json/?callback = handleResponse')
                    .then(
                        json => {
                            this.setState({
                                status: this.status[3],
                                icon: this.icons[3],
                                data: json
                            });
                            console.log(json);
                        },
                        error => {
                            this.setState({
                                status: this.status[4],
                                icon: this.icons[4],
                                data: null
                            });
                            console.log(error);
                        }
                    )
                    .then(() => {
                        setTimeout(() => {
                            obj.style.WebkitTransform = 'translateY(' + -40 + 'px)';
                            this.endY = -40;
                        }, 1000);
                    });
            } else {
                obj.style.WebkitTransform = 'translateY(' + -40 + 'px)';
            }
        }
    };
    render() {
        return (
            <div className="wrapper">
                <div
                    className="box"
                    onTouchStart={e => this.touchStartHandler(e)}
                    onTouchMove={e => this.touchMoveHandler(e)}
                    onTouchEnd={e => this.touchEndHandler(e)}
                >
                    <div className="header">
                        {this.state.status}
                    </div>
                    <div className="main">
                    下拉该页面进行刷新
                    </div>
                </div>
            </div>
        );
    }
}
