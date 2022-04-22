import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import initialStore from './initialStore';
import rootReducers from './reducers';

export default createStore(rootReducers, initialStore, composeWithDevTools(applyMiddleware(thunk)));

