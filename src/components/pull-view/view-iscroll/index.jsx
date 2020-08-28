import React from 'react';
import './style.scss';
import IScroll from 'iscroll';
import $ from 'jquery';

// 应用 and 兼容
// 元素放类外获取不到
const loadingTexts = ['松手刷新数据', '正在刷新', '刷新成功', '刷新失败'];
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
        });
        this.pullDown = $('#pullDown');
        this.pullDownLabel = $('.pullDownLabel');
        this.container = $('#ul');
        this.loadingStep = 0;
        this.pullDown.hide();
        document.addEventListener('touchstart', this.touchStart);
        document.addEventListener('touchmove', this.touchMove);
        document.addEventListener('touchend', this.touchEnd);
    }
    touchStart = e => {
        this.startY = e.targetTouches[0].pageY;
    }
    touchMove = e => {
        const isScroll = (this.loadingStep === 0 && !this.pullDown.attr('class').match('flip|loading'));
        // add y > 40
        this.currentY = e.targetTouches[0].pageY;
        const y = this.currentY - this.startY;
        if (isScroll && y > 20) {
            $('.pulldown-tips').hide();
            this.pullDown.addClass('refresh').show();
            this.pullDownLabel.text(loadingTexts[this.loadingStep]);
            this.loadingStep = 1;
            setTimeout(()=> {
                this.myScroll.refresh();
            }, 0);
        }
    }
    touchEnd = () => {
        if (this.loadingStep === 1) {
            if (this.pullDown.attr('class').match('refresh')) {// 下拉刷新操作
                // this.pullDown.removeClass('refresh').addClass('loading');
                this.pullDownLabel.text(loadingTexts[this.loadingStep]);
                this.loadingStep = 2;
                this.pullDownAction();
            }
        }
    }
    pullDownAction = () => {
        setTimeout(()=> {
            console.log('new data');
            const succuss = true;
            if (succuss) {
                this.loadingStep = 2;
            } else {
                this.loadingStep = 3;
            }
            this.pullDownLabel.text(loadingTexts[this.loadingStep]);
            setTimeout(()=> {
                this.pullDown.attr('class', '').hide();
            }, 1000);
            this.loadingStep = 0;
            $('.pulldown-tips').show();
            setTimeout(()=> {
                // dom结构改变后调用
                this.myScroll.refresh();
            }, 0);
        }, 1000);
    }
    render() {
        return (
            <div className="wrapper">
                <div className="scroller">
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
            </div>
        );
    }
}
