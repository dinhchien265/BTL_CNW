import * as types from './../constants/ActionType';

let initialState = (localStorage.getItem("token") === null) ? false : true;
console.log("tokenState", initialState);
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