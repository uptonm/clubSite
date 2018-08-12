import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers/combineReducers'
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk'
import 'bootswatch/dist/darkly/bootstrap.min.css'
import './index.css'

const store = createStore(reducers, {}, applyMiddleware(reduxThunk))

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>,
 document.getElementById('root'));
registerServiceWorker();
