import { combineReducers } from 'redux';
import { Map } from 'immutable';
import Home from 'views/Home/reducer';
import { reducer as reduxFormReducer } from 'redux-form';
import { ACTIONS } from './actions';

const initialState = Map({
    isProcessing: false,
    error: null
});

const App = (state = initialState, { type, payload }) => {
    switch (type) {
    case ACTIONS.LOADING:
        return state.merge({
            isProcessing: true,
            error: initialState.get('error')
        });
    case ACTIONS.LOADED:
        return state.merge({
            isProcessing: false,
            ...payload
        });
    default:
        return state;
    }
};

export default combineReducers({
    App,
    Home,
    form: reduxFormReducer
});
