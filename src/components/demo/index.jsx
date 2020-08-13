import React, { useEffect, useState } from 'react';
import { getSingle, createLoginLayer } from '../../utils/lib';
import Tab from 'tab';
import AddItem from 'tab/addItem';
import Button from 'button';
import { LoadingRing } from 'icon';
import { Toast } from 'toast-portals';
import { Toggle } from 'toggle';
import Input from '../input';
import BackTop from '../back-top';
import Upload from '../progress-bar/upload';
import LoadingBar from '../progress-bar/loading-bar';
import useFilter from '../filter';
// const TabContext = React.createContext('data1');
import '../../resources/global.scss';
import './style.scss';

export default function Demo(props) {
    const { actions } = props;

    const initPages = [
        {
            title: '基本',
            content: [
                { name: '按钮', compenent: <Button /> },
                { name: '加载', compenent: <div /> },
                { name: '提示', compenent: <Toast /> },
                { name: '开关', compenent: <Toggle /> },
                { name: '单例', compenent: <div id="loginBtn">登陆</div> },
                { name: '输入框', compenent: <Input input={input} /> },
                { name: '添加项', compenent: <AddItem /> },
                { name: '筛选', compenent: <div> {useFilter(actions)} </div>}
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
            };
    }, []);

    // 初始化航班信息
    useEffect(() => {
        const flightList = [{
            airline: 'HK',
            stop: 1,
            name: 'Hong Kong airline'
        },
        {
            airline: 'HK',
            stop: 2,
            name: 'Hong Kong airline'
        }];
        actions.initFlights(flightList);
    }, [actions]);

    return (
        <div className="demo">
            <header className="title">组件</header>
            <LoadingBar />
            {/* <TabContext.Provider value="concrete data"> */}
            <Tab>
                {/* {Tab暴露出children供不同父组件自定义} */}
                {pages.map((page, index)=>
                    <div key={index} name={page.title}>
                        {page.content.map((item, index)=>
                            <div key={index} className="item">
                                {item.name}
                                {item.compenent}
                            </div>
                        )}
                    </div>
                )}
            </Tab>
            <BackTop />
            {/* </TabContext.Provider> */}
        </div>
    );
};


