import React, { useEffect, useState, useMemo } from 'react';
import { getSingle, createLoginLayer } from '../../utils/lib';
import Tab from 'components/tab';
import AddItem from 'components/tab/addItem';
import Button from 'components/button';
import { Toggle } from 'components/toggle';
import Input from '../input';
import BackTop from '../back-top';
import Upload from '../progress-bar/upload';
import LoadingBar from '../progress-bar/loading-bar';
import Filter from '../filter';
import useInterval from '../useInterval';
// const TabContext = React.createContext('data1');
import '../../resources/global.scss';
import { getData } from '../../utils/lib';
import './style.scss';

export default function Demo(props) {
    const { actions } = props;
    const [count, setCount] = useState(0);
    // const second = useInterval();

    const initPages = [
        {
            title: '基本',
            content: [
                { name: '按钮', compenent: <Button /> },
                { name: '加载', compenent: <div /> },
                { name: '开关', compenent: <Toggle /> },
                { name: '单例', compenent: <div id="loginBtn">登陆</div> },
                { name: '输入框', compenent: <Input input={input} /> },
                { name: '添加项', compenent: <AddItem /> },
                // { name: '筛选', compenent: <div> {Filter(actions)} </div>}
            ]
        },
        {
            title: '布局',
            content: [
                { name: '选项', compenent: <i>Like this page</i> },
                { name: '上传组件', compenent: <Upload /> }
            ]
        },
        {
            title: '高级',
            content: [
                { name: '日历', compenent: <div/> },
            ]
        }
    ];
    const [pages] = useState(initPages);
    let input = React.createRef();
    useEffect(() => {
        // 创建单例
        var createSingleLoginLayer = getSingle(createLoginLayer);
        if (document.getElementById('loginBtn'))
            document.getElementById('loginBtn').onclick = function() {
                var loginLayer = createSingleLoginLayer();
                loginLayer.style.display = 'block';
                setC
            };
    }, []);

    // 初始化航班信息
    useEffect(() => {
        getData('http://localhost:8889/').then(data => {
            throw new Error('tes');
        }, err => {
        }).catch(err=>{
        });
        const flightList = [{
            airline: 'HK',
            stop: 1,
            name: 'Hong Kong airline'
        },
        {
            airline: 'HK1',
            stop: 2,
            name: 'Hong Kong airline'
        }];
        actions.initFlights(flightList);
    }, [actions]);
    const setCountHandler = () => {
        setCount(11);
    }
    const pages1 = useMemo(() => pages, [pages]);
    return (
        <div className="demo">
            <header className="title" onClick={setCountHandler}>组件</header>
            <LoadingBar />
            {/* <TabContext.Provider value="concrete data"> */}
            <Tab>
                {/* {Tab暴露出children供不同父组件自定义} */}
                {pages1.map((page, index)=>
                    <div key={index} name={page.title}>
                        {page.content.map((item, index)=>
                            <div key={index} className="item">
                                {item.name}
                                {item.compenent}
                            </div>
                        )}
                        <Input key={index} page={page} />
                    </div>
                )}
            </Tab>
            <BackTop />
            {/* </TabContext.Provider> */}
        </div>
    );
};


