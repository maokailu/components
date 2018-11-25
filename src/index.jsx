import React from 'react';
import { render } from 'react-dom';
// import Demo from './demo';
import Demo from './components/toast/demo';
import Carousel from './components/carousel/carousel';
import './index.scss';

render(
    // <div onClick={()=>Toast.info()}>clickme</div>,
    <Demo />,
    //     <div name="0">3</div>
    //     <div name="1">1</div>
    //     <div name="2">2</div>
    //     <div name="3">3</div>
    //     <div name="4">1</div>
    // </Carousel>,
    // <div onClick={()=>{ var loginLayer = getSingle(createLoginLayer); loginLayer.style.display = 'block';} }>btn</div>,
    document.getElementById('app-root')
);
