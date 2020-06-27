import React from 'react';
import { createStore } from 'redux';
import reducers from '../redux/reducers';
import { Provider } from 'react-redux';
import Demo from '../containers/demo';

const App = props => {
    const store = createStore(reducers);
    return (
        <Provider store={store}>
            <Demo {...props} />
        </Provider>
    );
};

export default App;
