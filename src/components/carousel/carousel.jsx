import React from 'react';
import './style.scss';
// 不断左移，左移后数组shift and push
let currentIndex = 1;
export default class Carousel extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        arr: [1, 2, 3]
    };
    componentDidMount() {
        this.timerID = setInterval(() => {
            const tab = document.getElementById('tab');
            tab.style.transform =  `translateX(-${currentIndex * 100}vw)`;
            tab.style.transition = 'transform 0.1s';
            // const arr = this.state.arr;
            // arr.push(arr.shift());
            // this.setState({
            //     arr: arr
            // });
            currentIndex++;
            const prev = tab.children[0];
            tab.appendChild(prev);
            tab.removeChild(prev);
        }, 1000);
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    render() {
        const arr = this.state.arr;
        return (
            <div className="tab1" id="tab">
                {/* {arr.map((item, index) => (
                    <div key={index}>{item}</div>
                ))} */}
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </div>
        );
    }
}
