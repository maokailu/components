import React from 'react';
import './style.scss';
// 不断左移，左移后数组push
export default class Carousel extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        arr: ['w', 'x', 'y', 'w', 'x'],
        currentIndex: 1
    };
    componentDidMount() {
        // const tab = document.getElementById('tab');
        // setInterval(() => {
        //     ++currentIndex;
        //     tab.style.transform =  `translateX(-${100 * currentIndex}vw)`;
        //     tab.style.transition = 'transform 1s';
        //     setTimeout(()=>{
        //         const newchild = document.createElement('div');
        //         newchild.innerText = tab.childNodes[currentIndex - 2].innerText;
        //         // 如果文档树中已经存在了 newchild，它将从文档树中删除
        //         tab.appendChild(newchild);
        //     }, 1000);
        // }, 1000);
    }
    componentWillUnmount() {
        // clearInterval(this.timerID);
    }
    gotonext = () =>{
        if (this.currentIndex === this.state.arr.length - 1) {
            this.setState({
                currentIndex: 1
            });
        }
        this.setState(prevState =>({
            currentIndex: prevState.currentIndex + 1
        }));
    }
    render() {
        const arr = this.state.arr;
        let count;
        let transition = {};
        if (this.state.currentIndex === this.state.arr.length - 1) {
            // 如何实现无缝切换
        } else {
            count = this.state.currentIndex;
            transition = {
                'transform': `translateX(-${100 * count }vw)`,
                'transition': 'transform 1s'
            };
        }
        return (
            <div className="wrapper">
                <div className="tab1" id="tab"  style = { transition }>
                    {arr.map((item, index) => (
                        <div key={index}>
                            {item}
                        </div>
                    ))}
                </div>
                <div onClick={this.gotonext}>next</div>
            </div>
        );
    }
}
