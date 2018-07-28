import {
    GET_CATEGORIES,
    GET_EXPENSES,
    SIGN_OUT,
    SIGN_IN
} from 'actions/actionTypes';

const initialState = {
    email: '',
    token: '',
    avatar: '',
    isUser: false,
    categories: [],
    expenses: [],
    pastDescriptions: []
};

const mainReducer = (state = initialState, action) => {
    switch (action.type) {

        case SIGN_IN: {
            localStorage.setItem('token', action.token);
            return {
                ...state,
                email: action.email,
                isUser: action.isUser,
                token: action.token,
                avatar: action.avatar
            };
        }

        case GET_CATEGORIES: {
            return {
                ...state,
                categories: action.payload
            };
        }

        case SIGN_OUT: {
            localStorage.clear();
            return {
                ...state,
                email: '',
                isUser: false,
                token: '',
                categories: [],
                subCategories: [],
                expenses: []
            };
        }

        case GET_EXPENSES: {
            return {
                ...state,
                expenses: action.payload
            };
        }
        default:
            return state;
    }
};

export default mainReducer;
