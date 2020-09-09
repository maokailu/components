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
import useInterval from '../useInterval';
// const TabContext = React.createContext('data1');
import '../../resources/global.scss';
import { getData } from '../../utils/lib';
import './style.scss';

export default function Demo(props) {
    const { actions } = props;
    const [count, setCount] = useState(0);
    const second = useInterval();

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
    // fcp
    useEffect(() => {
        const observer = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
                const metricName = entry.name;
                const time = Math.round(entry.startTime + entry.duration);
            
                console.log(metricName, time)
            }
        });
        observer.observe({entryTypes: ['paint']});


    }, []);
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
            airline: 'HK',
            stop: 2,
            name: 'Hong Kong airline'
        }];
        actions.initFlights(flightList);
    }, [actions]);

    useEffect(()=>{
        // function t(){
        //     var i = 1;
        //     setTimeout(() => {
        //         console.log(i)
        //     }, 1000)
        //     return function change(){
        //         i=2;
        //     }
        // }
        // change = t();
        // change();

        // function t(){
        //     var i = 0;
        //     setInterval(() => {
        //         i=i+1;
        //         console.log(i)
        //     }, 1000)
        // }
        // t();
    }, [])
    useEffect(() => {
        const id = setInterval(() => {
            // console.log(count)
            setCount(count + 1);
        }, 1000);
        return () => clearInterval(id);
      }, [count]);

    useEffect(() => {
        const timeout=new Promise(resolve=>{
            setTimeout(()=>{
                resolve('timeout');
            }, 1000)
        })
        const request=new Promise(resolve=>{
            setTimeout(()=>{
                resolve('response');
            }, 2000)
        }).then(()=>{
        })
        Promise.race([request, timeout]).then(res => {
            return res;
        })
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
};


