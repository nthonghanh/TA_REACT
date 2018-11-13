import { createStore, applyMiddleware, compose } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import reduxPromise from 'redux-promise';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import { Map } from 'immutable';
import appReducer from './reducers';
export const history = createHistory();
const initialState = {};
const middleware = [ thunk, reduxPromise, routerMiddleware(history) ];
if (PRODUCTION) {
    if (window.__REACT_DEVTOOLS_GLOBAL_HOOK__ && Object.keys(window.__REACT_DEVTOOLS_GLOBAL_HOOK__._renderers).length) {
        window.__REACT_DEVTOOLS_GLOBAL_HOOK__._renderers = {};
    }
} else {
    const logger = createLogger({
        stateTransformer: state => {
            const newState = {};
            Object.keys(state).forEach(key => {
                const stateItem = state[key];
                newState[key] = Map.isMap(stateItem) ? stateItem.toJS() : stateItem;
            });
            return newState;
        }
    });
    middleware.push(logger);
}
const composedEnhancers = compose(
    applyMiddleware(...middleware)
);
const store = createStore(
    connectRouter(history)(appReducer),
    initialState,
    composedEnhancers
);
export default store;
