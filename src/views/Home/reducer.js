import { Map } from 'immutable';
import { ACTIONS } from './actions';

const initialState = Map({
    data: null,
    error: null
});

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
    case ACTIONS.RESET_STATE:
        return state.merge(initialState);
    default:
        return state;
    }
};

export default reducer;
