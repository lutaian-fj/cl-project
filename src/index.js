import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import Router from './router'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers'
import 'antd/dist/antd.css'
const store = createStore(rootReducer, compose(applyMiddleware(thunkMiddleware)))

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>, 
  document.getElementById('root'))

serviceWorker.unregister();
