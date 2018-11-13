// import { AdminService } from 'services';
// import { Notification } from 'utils';
// import { requestStartAction, requestCompletedAction, getAppInfoAction } from 'containers/App/actions';

// export const ACTIONS = {
//     GET_MENU_INFO_START: 'APP/GET_MENU_INFO_START',
//     GET_MENU_INFO_SUCCESS: 'APP/GET_MENU_INFO_SUCCESS',
//     GET_MENU_INFO_ERROR: 'APP/GET_MENU_INFO_ERROR',

//     EDIT_MENU_INFO_START : 'APP/EDIT_MENU_INFO_START',
//     EDIT_MENU_INFO_SUCCESS : 'APP/EDIT_MENU_INFO_SUCCESS',
//     EDIT_MENU_INFO_ERROR : 'APP/EDIT_MENU_INFO_ERROR',

//     ADD_MENU_INFO_START : 'APP/ADD_MENU_INFO_START',
//     ADD_MENU_INFO_SUCCESS : 'APP/ADD_MENU_INFO_SUCCESS',
//     ADD_MENU_INFO_ERROR : 'APP/ADD_MENU_INFO_ERROR',

//     DELETE_MENU_INFO_START : 'APP/DELETE_MENU_INFO_START',
//     DELETE_MENU_INFO_SUCCESS : 'APP/DELETE_MENU_INFO_SUCCESS',
//     DELETE_MENU_INFO_ERROR : 'APP/DELETE_MENU_INFO_ERROR'
// };

// export const getAuthAndMenuInfoAction = async() => (
//     async (dispatch) => {
//         dispatch(getAppInfoAction());
//         dispatch(getMenuInfoDataAction());
//     }
// );

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

// export const editMenuInfoDataAction = async(editMenuInfo) => (
//     async (dispatch) => {
//         try {
//             dispatch(requestStartAction(ACTIONS.EDIT_MENU_INFO_START));
//             const updatedMenuInfo = await AdminService.editMenuInfoData(editMenuInfo);
//             dispatch(requestCompletedAction(ACTIONS.EDIT_MENU_INFO_SUCCESS, { updatedMenuInfo }));
//         } catch(error) {
//             Notification.error(error.statusText);
//             dispatch(requestCompletedAction(ACTIONS.EDIT_MENU_INFO_ERROR, { error }));
//         }
//     }
// );

// export const addMenuInfoDataAction = async(menuInfo) => (
//     async (dispatch) => {
//         try {
//             dispatch(requestStartAction(ACTIONS.ADD_MENU_INFO_START));
//             const createMenuInfo = await AdminService.addMenuInfoData(menuInfo);
//             dispatch(requestCompletedAction(ACTIONS.ADD_MENU_INFO_SUCCESS, { createMenuInfo }));
//         } catch(error) {
//             Notification.error(error.statusText);
//             dispatch(requestCompletedAction(ACTIONS.ADD_MENU_INFO_ERROR, { error }));
//         }
//     }
// );

// export const deleteMenuInfoDataAction = async(deletedMenuInfo) => (
//     async (dispatch) => {
//         try {
//             dispatch(requestStartAction(ACTIONS.DELETE_MENU_INFO_START));
//             await AdminService.deleteMenuInfoData(deletedMenuInfo.id);
//             dispatch(requestCompletedAction(ACTIONS.DELETE_MENU_INFO_SUCCESS, { deletedMenuInfo }));
//         } catch(error) {
//             Notification.error(error.statusText);
//             dispatch(requestCompletedAction(ACTIONS.DELETE_MENU_INFO_ERROR, { error }));
//         }
//     }
// );

