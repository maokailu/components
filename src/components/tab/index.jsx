import React, { useState, useEffect } from 'react';
// import Flipsnap from '../../resources/flipsnap.js';
import './style.scss';
let flipsnap = null;
export default function Tab(props) {
    const [current, useCurrent] = useState(0);
    useEffect(() => {
        // const distance = document.getElementById('flipsnap').offsetWidth / 3;
        // flipsnap = new Flipsnap('#flipsnap', {
        //     distance: distance,
        //     maxPoint: 2
        // });
        // flipsnap.element.addEventListener('fstouchmove', ev => {
        //     if ((!flipsnap.hasNext() && ev.direction === 1) || (!flipsnap.hasPrev() && ev.direction === -1)) {
        //         ev.preventDefault();
        //     }
        // });
        // flipsnap.element.addEventListener('fstouchend', ev => {
        //     useCurrent(ev.newPoint);
        // });
    }, []);
    const toggle = index => {
        useCurrent(index);
        // flipsnap.moveToPoint(index);
    };
    console.log('tab');
    return (
        // <TabContext.Comsumer >
        <div className="tab">
            <div className="nav">
                {/* 需要获取每个children节点携带的数据 */}
                {React.Children.map(props.children, (element, index) =>
                    <span
                        key={index}
                        onClick={() => toggle(index)}
                        className={current === index ? 'active' : ''}
                    >
                        {element.props.name}
                    </span>
                )}
            </div>
            <div className="content">
                <div id="flipsnap">
                    {React.Children.map(props.children, (element) =>
                        React.cloneElement(element, { current: current })
                    )}
                </div>
            </div>
        </div>
        // </TabContext.Comsumer>
    );
}

