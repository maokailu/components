import React from 'react';
import './style.scss';
// 不断左移，左移后数组push
let currentIndex = 0;
export default class Carousel extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        arr: [1, 2, 3]
    };
    componentDidMount() {
        const tab = document.getElementById('tab');
        setInterval(() => {
            ++currentIndex;
            tab.style.transform =  `translateX(-${100 * currentIndex}vw)`;
            tab.style.transition = 'transform 1s';
            setTimeout(()=>{
                const newchild = document.createElement('div');
                newchild.innerText = tab.childNodes[currentIndex - 2].innerText;
                // 如果文档树中已经存在了 newchild，它将从文档树中删除
                tab.appendChild(newchild);
            }, 1000);
        }, 1000);
    }
    componentWillUnmount() {
        // clearInterval(this.timerID);
    }
    render() {
        const arr = this.state.arr;
        return (
            <div className="wrapper">
                <div className="tab1" id="tab">
                    {/* {arr.map((item, index) => (
                        <div key={index}>{item}</div>
                    ))} */}
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                </div>
            </div>
        );
    }
}
