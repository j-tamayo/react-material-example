import {LOGIN} from '../actions';

const initialState = {
    isAuthenticated: false
};

export default function authentication(state = initialState, action) {

    switch(action.type) {
        case LOGIN:
            return state;

        default:
            return state;
    }

}