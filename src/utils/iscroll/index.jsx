import React from 'react';
import './style.scss';
import IScroll from 'iscroll';
import $ from 'jquery';

// 应用 and 兼容
// 元素放类外获取不到
export default class Toggle extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
    };
    componentDidMount() {
        this.myScroll = new IScroll('.wrapper', {
            mouseWheel: true,
            scrollbars: true,
            preventDefault: false,
            probeType: 3,
            zoom: false,
            bounce: true
            // tap: true
        });
        this.pullDown = $('#pullDown');
        this.pullDownLabel = $('.pullDownLabel');
        this.container = $('#ul');
        this.loadingStep = 0;
        this.pullDown.hide();
        document.addEventListener('touchmove', this.onScroll);
        // 监听不到
        document.addEventListener('touchend', this.touchEnd);
    }
    onScroll = () => {
        const isScroll = (this.loadingStep === 0 && !this.pullDown.attr('class').match('flip|loading'));
        // add y > 40
        if (isScroll) {
            $('.pulldown-tips').hide();
            this.pullDown.addClass('refresh').show();
            this.pullDownLabel.text('松手刷新数据');
            this.loadingStep = 1;
            this.myScroll.refresh();
        }
    }
    scrollEnd = () => {
        console.log('end');
        if (this.loadingStep === 1) {
            if (this.pullDown.attr('class').match('refresh')) {// 下拉刷新操作
                this.pullDown.removeClass('refresh').addClass('loading');
                this.pullDownLabel.text('正在刷新');
                this.loadingStep = 2;
                this.pullDownAction();
            }
        }
    }
    pullDownAction = () => {
        setTimeout(function() {
            let li;
            let i;
            for (i = 0, li = ''; i < 3; i++) {
                li += '<li>' + 'new Add ' + new Date().toLocaleString() + ' ！' + '</li>';
            }
            this.container.prepend(li);
            this.pullDown.attr('class', '').hide();
            this.myScroll.refresh();
            this.loadingStep = 0;
            $('.pulldown-tips').show();
        }, 1000);
    }
    render() {
        return (
            <div className="wrapper">
                <div id="pullDown" className="">
                    <div className="pullDownIcon"></div>
                    <div className="pullDownLabel">pulldownLabel</div>
                </div>
                <div className="pulldown-tips">下拉刷新</div>
                <ul id="ul">
                    <li style={{ backgroundColor: 'red' }}>1</li>
                    <li style={{ backgroundColor: 'orange' }}>2</li>
                    <li style={{ backgroundColor: 'green' }}>3</li>
                    <li style={{ backgroundColor: 'red' }}>1</li>
                    <li style={{ backgroundColor: 'orange' }}>2</li>
                    <li style={{ backgroundColor: 'green' }}>3</li>
                </ul>
            </div>
        );
    }
}
