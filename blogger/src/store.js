import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers/index';
import { logger } from 'redux-logger'
const middleware = [thunk];
if (process.env.NODE_ENV === 'production') {
  store = createStore(rootReducer, {}, compose(
    applyMiddleware(...middleware)
  ));
} else {
  store = createStore(rootReducer, {}, compose(
    applyMiddleware(...middleware, logger),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ));
}


export default store;
