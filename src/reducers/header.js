import * as types from './../constants/ActionType';

let initialState = true;
const logged = (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN: {
            return true;
        }
        case types.LOGOUT: {
            return false;
        }
        default: return state;
    }
};

export default logged;