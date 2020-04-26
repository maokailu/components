import React, { Component } from 'react';
import './style.scss';

export default class Testitem extends Component {
    componentDidMount() {
        var item = document.getElementById('item-box');
        var initX; // 触摸位置
        var moveX; // 滑动时的位置
        var X = 0; // 移动距离
        var objX = 0; // 目标对象位置
        window.addEventListener('touchstart', event => {
            // 事件委托根据列表项状态监听处理左滑或右滑事件
            event.preventDefault();
            var obj = event.target.parentNode;
            if (obj.className === 'item-box') {
                initX = event.targetTouches[0].pageX;
                objX = (item.style.WebkitTransform.replace(/translateX\(/g, '').replace(/vw\)/g, '')) * 1;
            }
            if (objX === 0) {
                window.addEventListener('touchmove', event => {
                    event.preventDefault();
                    var obj = event.target.parentNode;
                    if (obj.className === 'item-box') {
                        moveX = event.targetTouches[0].pageX;
                        X = moveX - initX;
                        if (X >= 0) {
                            item.style.WebkitTransform = 'translateX(' + 0 + 'vw)';
                        } else if (X < 0) {
                            var l = Math.abs(X);
                            item.style.WebkitTransform = 'translateX(' + -l + 'vw)';
                            if (l > 20) {
                                l = 20;
                                item.style.WebkitTransform = 'translateX(' + -l + 'vw)';
                            }
                        }
                    }
                });
            } else if (objX < 0) {
                window.addEventListener('touchmove', event => {
                    event.preventDefault();
                    var obj = event.target.parentNode;
                    if (obj.className === 'item-box') {
                        moveX = event.targetTouches[0].pageX;
                        X = moveX - initX;
                        if (X >= 0) {
                            var r = -20 + Math.abs(X);
                            item.style.WebkitTransform = 'translateX(' + r + 'vw)';
                            if (r > 0) {
                                r = 0;
                                item.style.WebkitTransform = 'translateX(' + r + 'vw)';
                            }
                        } else { // 向左滑动
                            item.style.WebkitTransform = 'translateX(' + -20 + 'vw)';
                        }
                    }
                });
            }
        });
        window.addEventListener('touchend', event => {
            event.preventDefault();
            var obj = event.target.parentNode;
            if (obj.className === 'item-box') {
                objX = (item.style.WebkitTransform.replace(/translateX\(/g, '').replace(/vw\)/g, '')) * 1;
                if (objX > -15) {
                    item.style.WebkitTransform = 'translateX(' + 0 + 'vw)';
                    objX = 0;
                } else {
                    item.style.WebkitTransform = 'translateX(' + -20 + 'vw)';
                    objX = -20;
                }
            }
        });
    }
    render() {
        return (
            <div className="ul">
                <div id="item-box" className="item-box">
                    <div className="item-left">
                        item左边内容部分
                    </div>
                    <div className="item-right">item右边按钮</div>
                </div>
            </div>
        );
    }
}
