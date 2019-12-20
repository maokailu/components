import React from 'react';
import './style.scss';
import { Tab } from 'tab';
import Button from 'button';
import { LoadingRing } from 'icon';
import { Toast } from 'toast-portals';
import { Toggle } from 'toggle';
import Game2048 from '../src/components/2048';
import './resources/global.scss';
import { getSingle, createLoginLayer } from './utils/lib';
export default class Demo extends React.Component {
    componentDidMount() {
        var createSingleLoginLayer = getSingle(createLoginLayer);
        if (document.getElementById('loginBtn'))
            document.getElementById('loginBtn').onclick = function() {
                var loginLayer = createSingleLoginLayer();
                loginLayer.style.display = 'block';
            };
    }
    static defaultProps = {
        pages: [
            { title: '基本',
                content: [
                    { name: '按钮', compenent: <Button /> },
                    { name: '加载', compenent: <LoadingRing /> },
                    { name: '提示', compenent: <Toast /> },
                    { name: '开关', compenent: <Toggle /> },
                    { name: '单例', compenent: <div id="loginBtn">登陆</div> }
                ]
            },
            { title: '布局',
                content: [
                    { name: '选项',
                        compenent: <i>Like this page</i>
                    }
                ]
            },
            { title: '高级',
                content: [
                    { name: '日历', compenent: <div/> }
                ]
            }
        ]
    }
    render() {
        return (
            <div className="demo">
                {/* <header className="title">组件</header>
                <Tab>
                    {this.props.pages.map((page, index)=>{
                        return (
                            <div key = {index} name={ page.title }>
                                {page.content.map((item, index)=>{
                                    return (
                                        <div key = {index} className="item">
                                            { item.name }
                                            {item.compenent}
                                        </div>
                                    );
                                })
                                }
                            </div>
                        );
                    })}
                </Tab> */}
                <Game2048 />
            </div>
        );
    }
}
