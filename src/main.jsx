import React from 'react';
import { render } from 'react-dom';
// import App from './air-booking/detail';
import App from './utils/datePicker';
import './resources/global.scss';
import './main.scss';
import './utils/adaptation';

render(
    //   <App>
    //     <div name="1">
    //         第一部分
    //     </div>
    //     <div name="2">
    //         第二部分
    //     </div>
    //     <div name="3">
    //         第三部分
    //     </div>
    //   </App>
    <App />,
    document.getElementById('root')
);
