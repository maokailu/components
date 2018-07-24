import React, { Component } from 'react';
import './style.scss';
let Flipsnap = require('../../../resources/flipsnap');
let flipsnap;
export default class Tab extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    componentDidMount() {
        // debugger
        // var template=document.querySelector('#template');
        // for(var i = 0; i<10; i++) {
        //     document.querySelector("#tab-container1").appendChild(template.content.cloneNode(true));
        // };
        // 设置样式
        flipsnap = Flipsnap('#flipsnap', {
            distance: document.documentElement.clientWidth,
            maxPoint: 3
        });
        flipsnap.element.addEventListener('fstouchmove', function(ev) {
            if ((!flipsnap.hasNext() && ev.direction === 1) || (!flipsnap.hasPrev() && ev.direction === -1)) {
                ev.preventDefault();
            }
        });
        flipsnap.element.addEventListener('fstouchend', function(ev) {
            // 更改tab颜色
            document.getElementsByTagName('li')[ev.originalPoint].style.color = '#777';
            document.getElementsByTagName('li')[ev.newPoint].style.color = '#62b900';
            // 每个页面保留上次位置
            // document.getElementsByTagName("li")[ev.newPoint];\
            // 边界阴影效果
            // 会卡主
        });
    }
    render() {
        return (
            <div className="page">
                <div className="nav-box">
                WeChat
                </div>
                <div className="content-box">
                    <div id="flipsnap">
                        <div id="tab-container1">
                            {
                                [0, 1, 2, 3, 4, 5, 6, 7, 8].map((title, index)=>
                                    <div key={index} id="template" className="item">
                                        <div className="item-content">
                                            <img src="" />
                                            <div className="message">
                                                <div className="name">name</div>
                                                <div className="content">content</div>
                                            </div>
                                            <div className="time">time
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                        <div id="tab-container2">
                            <div id="template" className="item">
                                <div className="item-content">
                                    <img src="" />
                                    <div className="message">
                                        <div className="name">name</div>
                                        <div className="content">content</div>
                                    </div>
                                    <div className="time">time
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="tab-container3">
                            <div id="template" className="item">
                                <div className="item-content">
                                    <img src="" />
                                    <div className="message">
                                        <div className="name">name</div>
                                        <div className="content">content</div>
                                    </div>
                                    <div className="time">time
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="tab-container4">
                            <div id="template" className="item">
                                <div className="item-content">
                                    <img src="" />
                                    <div className="message">
                                        <div className="name">name</div>
                                        <div className="content">content</div>
                                    </div>
                                    <div className="time">time
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-box">
                    <li style={{ color: '#62b90' }}>WeChat
                    </li>
                    <li>Address
                    </li>
                    <li>Find
                    </li>
                    <li>Me
                    </li>
                </div>
            </div>
        );
    }
}
