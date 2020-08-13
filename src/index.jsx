import React from 'react';
import { render } from 'react-dom';
import Demo from './pages/demo';
import './index.scss';
if (module.hot) {
    module.hot.accept('./pages/demo.jsx', function() {
        render(
            <Demo />,
            document.getElementById('root')
        );
    });
}
render(
    <Demo />,
    document.getElementById('root')
);
