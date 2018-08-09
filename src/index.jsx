import React from 'react';
import { render } from 'react-dom';
// import Demo from './demo';
// import Toast from './components/toast/toast-base';
import Carousel from './components/carousel/carousel';
import './index.scss';

render(
    <Carousel/>,
    //     <div name="0">3</div>
    //     <div name="1">1</div>
    //     <div name="2">2</div>
    //     <div name="3">3</div>
    //     <div name="4">1</div>
    // </Carousel>,
    // <div onClick={()=>{ var loginLayer = getSingle(createLoginLayer); loginLayer.style.display = 'block';} }>btn</div>,
    document.getElementById('app-root')
);
