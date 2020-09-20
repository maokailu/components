import React, { useState, useEffect } from 'react';

export default function useInterval() {
    const [second, setSecond] = useState(0);
    useEffect(() => {
        // 每次运行时重新创建，读取每次运行时的快照
        const id = setInterval(() => {
            // debugger
            setSecond(second + 1);
            // console.log('second', second);
        }, 1000);
        return () => clearInterval(id);
    }, [second]);
    return second;
}
