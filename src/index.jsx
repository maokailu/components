import React from 'react';
import { render } from 'react-dom';
// import Demo from './demo';
// import Toast from './components/toast/toast-base';
import Carousel from './components/carousel/carousel';
import './index.scss';

render(
    <Carousel />,
    // <div onClick={()=>{ var loginLayer = getSingle(createLoginLayer); loginLayer.style.display = 'block';} }>btn</div>,
    document.getElementById('app-root')
);
