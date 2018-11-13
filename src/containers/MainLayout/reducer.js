// import { Map, List } from 'immutable';
// import { ACTIONS } from './actions';

// const initialState = Map({
//     menuInfo: null,
//     error: null
// });

// const reducer = (state = initialState, { type, payload }) => {
//     switch (type) {
    
//     case ACTIONS.GET_MENU_INFO_START: return state.merge({ 
//         error: initialState.get('error'), 
//         menuInfo: initialState.get('menuInfo') });
//     case ACTIONS.GET_MENU_INFO_SUCCESS: return state.merge(payload);
//     case ACTIONS.GET_MENU_INFO_ERROR: return state.merge(payload);

//     case ACTIONS.EDIT_MENU_INFO_START: return state.merge({ error: initialState.get('error') });
//     case ACTIONS.EDIT_MENU_INFO_SUCCESS: {
//         const { updatedMenuInfo } = payload;
//         const list = state.get('menuInfo');
//         const index = list.findIndex(item => updatedMenuInfo.id === item.id);
//         if (index !== -1) {
//             const menuInfo = list.update(index, () => updatedMenuInfo);
//             return state.merge({ menuInfo });
//         }
//         return state;
//     }
//     case ACTIONS.EDIT_MENU_INFO_ERROR: return state.merge(payload);

//     case ACTIONS.ADD_MENU_INFO_START: return state.merge({ error: initialState.get('error') });
//     case ACTIONS.ADD_MENU_INFO_SUCCESS: {
//         const { createMenuInfo } = payload;
//         const currentList = state.get('menuInfo');
//         if (!currentList) {
//             const newList = List([ createMenuInfo ]);
//             return state.merge({ menuInfo: newList });
//         }
//         const updatedList = currentList.push(createMenuInfo);
//         return state.merge({ menuInfo: updatedList });
//     }
//     case ACTIONS.ADD_MENU_INFO_ERROR: return state.merge(payload);

//     case ACTIONS.DELETE_MENU_INFO_START: return state.merge({ error: initialState.get('error') });
//     case ACTIONS.DELETE_MENU_INFO_SUCCESS:
//         const { deletedMenuInfo } = payload;
//         const currentList = state.get('menuInfo');
//         const deletedIndex = currentList.findIndex(a => a.id === deletedMenuInfo.id);
//         if (deletedIndex !== -1) {
//             const newList = currentList.delete(deletedIndex);
//             return state.merge({ menuInfo: newList });
//         }
//         return state;
//     case ACTIONS.DELETE_MENU_INFO_ERROR: return state.merge(payload);


//     default: return state;
//     }
// };

// export default reducer;
