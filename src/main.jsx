import React from 'react';
import { render } from 'react-dom';
import App from './utils/tab';

render(
  <App>
    <div name="one">
        第一部分
    </div>
    <div name="two">
        第二部分
    </div>
    <div name="three">
        第三部分
    </div>
  </App>
, document.getElementById('root')
);
