import { combineReducers } from 'redux';
import { Map } from 'immutable';
import { reducer as reduxFormReducer } from 'redux-form';
import MainReducer from 'containers/MainLayout/reducer';
import Home from 'views/Home/reducer';
import { LocalDataService } from 'services';
import { ACTIONS } from './actions';

const initialState = Map({
    isProcessing: false,
    user: null,
    viewSetting: null,
    error: null
});

const App = (state = initialState, { type, payload }) => {
    switch (type) {
    case ACTIONS.LOADING: return state.merge({ isProcessing: true, ...payload });
    case ACTIONS.LOADED: return state.merge({ isProcessing: false, ...payload });

    case ACTIONS.GET_AUTHENTICATION_START: return state.merge({ error: initialState.get('error') });
    case ACTIONS.GET_AUTHENTICATION_SUCCESS: {
        const { user, appSetting } = payload;
        if(appSetting) {
            const localStore = new LocalDataService();
            localStore.viewSetting = LocalDataService.defaultViewSettings(appSetting.defaultGridRow);
        }
        return state.merge({ user });
    }
    case ACTIONS.GET_AUTHENTICATION_ERROR: return state.merge(payload);

    default: return state;
    }
};

export default combineReducers({
    App,
    MainReducer,
    Home,
    form: reduxFormReducer
});
