// import { Notification } from 'utils';
// import { requestStartAction, requestCompletedAction, getAppInfoAction } from 'containers/App/actions';

// export const ACTIONS = {
//     GET_MENU_INFO_START: 'APP/GET_MENU_INFO_START',
//     GET_MENU_INFO_SUCCESS: 'APP/GET_MENU_INFO_SUCCESS',
//     GET_MENU_INFO_ERROR: 'APP/GET_MENU_INFO_ERROR'
// };

// export const getMenuInfoDataAction = async() => (
//     async (dispatch) => {
//         try {
//             dispatch(requestStartAction(ACTIONS.GET_MENU_INFO_START));
//             const menuInfo = await AdminService.getMenuInfoData();
//             dispatch(requestCompletedAction(ACTIONS.GET_MENU_INFO_SUCCESS, { menuInfo }));
//         } catch(error) {
//             Notification.error(error.statusText);
//             dispatch(requestCompletedAction(ACTIONS.GET_MENU_INFO_ERROR, { error }));
//         }
//     }
// );
