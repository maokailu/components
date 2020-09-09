import React from 'react';
import ReactDOM from 'react-dom';
import Demo from './pages/demo';
import './index.scss';
if (module.hot) {
    module.hot.accept('./pages/demo.jsx', function() {
        ReactDOM.render(
            <Demo />,
            document.getElementById('root')
        );
    });
}
ReactDOM.render(
    <Demo />,
    document.getElementById('root')
);
