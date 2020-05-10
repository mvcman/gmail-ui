import { combineReducers } from 'redux';

function ToggleSideBar(state = { isOpen: false }, action) {
    switch (action.type) {
        case 'TOGGLE':
            return { isOpen: !state.isOpen };
        case 'TOGGLE_CLOSE':
            return { isOpen: false };
        default:
            return state;
    }
}

function ActiveRoute(state = { link: '/home'}, action){
    switch (action.type) {
        case 'HOME': 
            return { link: '/home' };
        case 'FIRST':
            return { link: '/first' };
        case 'SECOND': 
            return { link: '/second' };
        default: 
            return state;
    }
}

export const rootReducer = combineReducers({
    toggle: ToggleSideBar,
    activeRoute: ActiveRoute,
});
