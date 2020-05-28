import React, { useEffect, useState } from 'react';
import { getSingle, createLoginLayer } from './utils/lib';
import Tab from 'tab';
import AddItem from 'tab/addItem';
import Button from 'button';
import { LoadingRing } from 'icon';
import { Toast } from 'toast-portals';
import { Toggle } from 'toggle';
import Input from './components/input';
import BackTop from './components/back-top';
import Upload from './components/progress-bar/upload';
import LoadingBar from './components/progress-bar/loading-bar';
// const TabContext = React.createContext('data1');
import './resources/global.scss';
import './style.scss';

export default function Demo() {
    const initPages = [
        {
            title: '基本',
            content: [
                { name: '按钮', compenent: <Button /> },
                { name: '加载', compenent: <LoadingRing /> },
                { name: '提示', compenent: <Toast /> },
                { name: '开关', compenent: <Toggle /> },
                { name: '单例', compenent: <div id="loginBtn">登陆</div> },
                { name: '输入框', compenent: <Input input={input} /> },
                { name: '添加项', compenent: <AddItem /> }
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
                { name: '日历', compenent: <div/> }
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
}
