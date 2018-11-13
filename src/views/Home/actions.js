import { requestStartAction } from 'containers/App/actions';

export const ACTIONS = {
    'RESET_STATE': 'HOME/RESET_STATE'
};

/**
 * Reset view state action
 * @param {Function}
 */
export const resetStateAction = () => {
    return dispatch => dispatch(requestStartAction(ACTIONS.RESET_STATE, {}, false));
};
