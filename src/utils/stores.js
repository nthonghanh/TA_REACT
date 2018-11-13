import { createStore, applyMiddleware, compose } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import { Map } from 'immutable';
import rootReducer from './reducers';

export const history = createHistory();
const initialState = {};
const middleware = [ thunk, routerMiddleware(history) ];

if (process.env.NODE_ENV === 'development') {
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
    connectRouter(history)(rootReducer),
    initialState,
    composedEnhancers
);

export default store;
