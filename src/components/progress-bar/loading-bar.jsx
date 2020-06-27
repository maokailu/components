
import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

import './style.scss';
export default function LoadingBar(props) {
    const [isFixed, useFixed] = useState(false);
    // 进度条触顶后固定在顶部
    useEffect(() => {
        const fixBar = ()=> {
            const progressScrollTop = document.getElementById('progress-bar').getBoundingClientRect().top;
            if (progressScrollTop < 10) useFixed(true);
        };
        window.addEventListener('scroll', fixBar);
        return ()=>{
            window.removeEventListener('scroll', fixBar);
        };
        // class
    }, []);
    // 滚动到进度条位置时，就固定在顶部
    return (
        <div id="progress-bar"
            className={classNames({
                'progress-bar': true,
                'fixed': isFixed
            })}>
        </div>
    );
}
