/**
 * 选择筛选项
 * @param {*} data 数据
 * @param {*} options 筛选项
 * @param {*} id 传入关联组件的id来重置派生state
 */
import React, { useState, useEffect, useCallback, useReducer } from 'react';
import produce from 'immer';
import './style.scss';
const defaultOptions = {
    airlines: [
        {
            code: 'HO',
            name: 'HO航司',
            status: false
        }, {
            code: 'HK',
            name: 'HK航司',
            status: false
        }],
    airports: [
        {
            code: 'SHA',
            name: '上海机场',
            status: false
        }, {
            code: 'PVG',
            name: '浦东机场',
            status: false
        }
    ]
};
const useFilter = (actions, optionFromProps, filterId) => {
    const [options, setOptions] = useState(optionFromProps || defaultOptions);

    useEffect(()=>{
        setOptions(optionFromProps || defaultOptions);
    }, [filterId]);

    const choose = (type, code) => {
        setOptions(produce(draft => {
            const item = draft[type].find(item => item.code === code);
            item.status = !item.status;
        }));
    };
    const filter  = () => {
        actions.filterFlights(options);
    };
    return (
        <div className="filter">
            <div><h3>筛选项2</h3>
                <div>
                    {Object.getOwnPropertyNames(options).map((type, typeIndex) => (
                        <div key={typeIndex}>
                            {type}
                            {options[type].map((item, index) =>
                                <span key={index} onClick={useCallback(() => choose(type, item.code))}
                                    className={item.status ? 'active' : ''}>
                                    {item.name}
                                </span>
                            )}
                        </div>
                    ))}
                    <div onClick={filter}>filter</div>
                </div>
            </div>
        </div>
    );
};
export default useFilter;
