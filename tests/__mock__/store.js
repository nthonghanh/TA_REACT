import configureStore from 'redux-mock-store';
import { createMemoryHistory } from 'history';
import { Map } from 'immutable';
import { User } from 'models';

const middlewares = [];
const mockStore = configureStore(middlewares);
const history = createMemoryHistory();

// Initialize mockstore
const initialState = {
    App: Map({
        isProcessing: false,
        user: new User({})
    }),
    router: {
        action: 'POP',
        location: history.location
    }
};
const store = mockStore(initialState);

export default store;
