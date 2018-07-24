import React from 'react';
import { render } from 'react-dom';
import Demo from './demo';
// import Toast from './components/toast/toast-base';
import './index.scss';

render(
    <Demo />,
    // <div onClick={()=>{ var loginLayer = getSingle(createLoginLayer); loginLayer.style.display = 'block';} }>btn</div>,
    document.getElementById('app-root')
);
