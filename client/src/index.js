import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './reducers/combineReducers'
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import 'bootswatch/dist/darkly/bootstrap.min.css'

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>,
 document.getElementById('root'));
registerServiceWorker();
