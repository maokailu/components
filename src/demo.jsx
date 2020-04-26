import React, { useEffect } from 'react';
import './style.scss';
import Tab from 'tab';
import Button from 'button';
import { LoadingRing } from 'icon';
import { Toast } from 'toast-portals';
import { Toggle } from 'toggle';
import Input from './components/input';
import './resources/global.scss';
import { getSingle, createLoginLayer } from './utils/lib';
// const TabContext = React.createContext('data1');

export default function Demo() {
    // 常量如何
    let input = React.createRef();
    const pages = [
        {
            title: '基本',
            content: [
                { name: '按钮', compenent: <Button /> },
                { name: '加载', compenent: <LoadingRing /> },
                { name: '提示', compenent: <Toast /> },
                { name: '开关', compenent: <Toggle /> },
                { name: '单例', compenent: <div id="loginBtn">登陆</div> },
                { name: '输入框', compenent: <Input input={input} /> }
            ]
        },
        {
            title: '布局',
            content: [
                { name: '选项',
                    compenent: <i>Like this page</i>
                }
            ]
        },
        {
            title: '高级',
            content: [
                { name: '日历', compenent: <div/> }
            ]
        }
    ];
    useEffect(() => {
        console.log(input.current);
        // 创建单例
        var createSingleLoginLayer = getSingle(createLoginLayer);
        if (document.getElementById('loginBtn'))
            document.getElementById('loginBtn').onclick = function() {
                var loginLayer = createSingleLoginLayer();
                loginLayer.style.display = 'block';
            };
    }, []);
    const test = e => {
        // e.stopPropagation();
        console.log('demo', e.target);
    };
    return (
        <div className="demo" onClick={test}>
            <header className="title">组件</header>
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
            {/* </TabContext.Provider> */}
        </div>
    );
}
