import {
    GET_CATEGORIES,
    GET_EXPENSES,
    SIGN_OUT,
    SIGN_IN
} from 'actions/actionTypes';
import {TextConstants} from 'constants/TextConstants';
import {
    GetCategories, UpdateCategory, AddCategory, DelCategory, AddExpense, GetExpenses,
    UpdateExpense, Signin, Signup, Verify, GetCurrentUserByToken
} from './axiosRequests';

export const signup = user => dispatch => {
    Signup(user)
        .then(res => {
                if (res.data.success) {
                    alert(res.data.message);
                }
                else {
                    alert(res.data.message);
                    dispatch({
                        type: SIGN_IN,
                        email: '',
                        isUser: false,
                        token: '',
                        idUser: '',
                        avatar: ''
                    });
                }
            }
        )
        .catch(err => {
                alert(err);
                dispatch({
                    type: SIGN_IN,
                    email: '',
                    isUser: false,
                    token: '',
                    idUser: '',
                    avatar: ''
                });
            }
        );
};

export const verify = user => dispatch => {
    Verify(user)
        .then(res => {
                if (res.data.success) {
                    dispatch({
                        type: SIGN_IN,
                        email: res.data.payload.email,
                        isUser: true,
                        token: res.data.token,
                        idUser: res.data.payload.id,
                        avatar: res.data.payload.avatar
                    });
                }
                else {
                    alert(res.data.message);
                    dispatch({
                        type: SIGN_IN,
                        email: '',
                        isUser: false,
                        token: '',
                        idUser: '',
                        avatar: ''
                    });
                }
            }
        )
        .catch(err => {
                alert(err);
                dispatch({
                    type: SIGN_IN,
                    email: '',
                    isUser: false,
                    token: '',
                    idUser: '',
                    avatar: ''
                });
            }
        );
};

export const getCurrentUserByToken = () => dispatch => {
    GetCurrentUserByToken()
        .then(res => {
                if (res.data.success) {
                    dispatch({
                        type: SIGN_IN,
                        email: res.data.payload.email,
                        isUser: true,
                        token: res.data.token,
                        idUser: res.data.payload.id,
                        avatar: res.data.payload.avatar
                    });
                }
                else {
                    alert(res.data.message);
                    dispatch({
                        type: SIGN_IN,
                        email: '',
                        isUser: false,
                        token: '',
                        idUser: '',
                        avatar: ''
                    });
                }
            }
        )
        .catch(err => {
                alert(err);
                dispatch({
                    type: SIGN_IN,
                    email: '',
                    isUser: false,
                    token: '',
                    idUser: '',
                    avatar: ''
                });
            }
        );
};

export const getInitialState = () => dispatch => {
    GetCurrentUserByToken()
        .then(res => {
                if (res.data.success) {
                    dispatch({
                        type: SIGN_IN,
                        email: res.data.payload.email,
                        isUser: true,
                        token: res.data.token,
                        idUser: res.data.payload.id,
                        avatar: res.data.payload.avatar
                    });
                }
                else {
                    alert(res.data.message);
                    dispatch({
                        type: SIGN_IN,
                        email: '',
                        isUser: false,
                        token: '',
                        idUser: '',
                        avatar: ''
                    });
                }
            }
        )
        .catch(err => {
                alert(err);
                dispatch({
                    type: SIGN_IN,
                    email: '',
                    isUser: false,
                    token: '',
                    idUser: '',
                    avatar: ''
                });
            }
        )
        .then(res => GetCategories()
            .then(res =>
                dispatch({
                    type: GET_CATEGORIES,
                    payload: res.data
                })
            )
            .catch(err => {
                    alert(TextConstants.SERVETNOTRESP);
                    dispatch({
                        type: GET_CATEGORIES,
                        payload: []
                    });
                }
            )
        )
        .then(res => GetExpenses()
            .then(res =>
                dispatch({
                    type: GET_EXPENSES,
                    payload: res.data
                })
            )
            .catch(err => {
                    alert(TextConstants.SERVETNOTRESP);
                    dispatch({
                        type: GET_EXPENSES,
                        payload: []
                    });
                }
            )
        );
};

export const signin = user => dispatch => {
    Signin(user)
        .then(res => {
                if (res.data.success) {
                    dispatch({
                        type: SIGN_IN,
                        email: res.data.payload.email,
                        isUser: true,
                        token: res.data.token,
                        idUser: res.data.payload.id,
                        avatar: res.data.payload.avatar
                    });
                }
                else {
                    alert(res.data.message);
                    dispatch({
                        type: SIGN_IN,
                        email: '',
                        isUser: false,
                        token: '',
                        idUser: '',
                        avatar: ''
                    });
                }
            }
        )
        .catch(err => {
                alert(err);
                dispatch({
                    type: SIGN_IN,
                    email: '',
                    isUser: false,
                    token: '',
                    idUser: '',
                    avatar: ''
                });
            }
        );
};

export const updateExpense = (_id, expense) => dispatch => {
    UpdateExpense(_id, expense)
        .then(res => {
                if (res.data.success) {
                    GetExpenses()
                        .then(res =>
                            dispatch({
                                type: GET_EXPENSES,
                                payload: res.data
                            })
                        )
                        .catch(err => {
                                alert(err);
                                dispatch({
                                    type: GET_EXPENSES,
                                    payload: []
                                });
                            }
                        );
                }
                else {
                    alert(res.data.message);
                    dispatch({
                        type: GET_EXPENSES,
                        payload: []
                    });
                }
            }
        )
        .catch(err => {
                alert(err);
                dispatch({
                    type: GET_EXPENSES,
                    payload: []
                });
            }
        );
};


//Get Expenses
export const getExpenses = () => dispatch => {
    GetExpenses()
        .then(res =>
            dispatch({
                type: GET_EXPENSES,
                payload: res.data
            })
        )
        .catch(err => {
                alert(TextConstants.SERVETNOTRESP);
                dispatch({
                    type: GET_EXPENSES,
                    payload: []
                });
            }
        );
};

export const addExpense = newExpense => dispatch => {
    AddExpense(newExpense)
        .then(res => {
                if (res.data.success) {
                    GetExpenses()
                        .then(res =>
                            dispatch({
                                type: GET_EXPENSES,
                                payload: res.data
                            })
                        )
                        .catch(err => {
                                alert(TextConstants.SERVETNOTRESP);
                                dispatch({
                                    type: GET_EXPENSES,
                                    payload: []
                                });
                            }
                        );
                }
            }
        )
        .catch(err => {
                alert(TextConstants.SERVETNOTRESP)
                dispatch({
                    type: GET_EXPENSES,
                    payload: []
                });
            }
        );

};

export const updateCategory = (_id, category) => dispatch => {
    UpdateCategory(_id, category)
        .then(res => {
                if (res.data.success) {
                    GetCategories()
                        .then(res =>
                            dispatch({
                                type: GET_CATEGORIES,
                                payload: res.data
                            })
                        )
                        .catch(err => {
                                alert(TextConstants.SERVETNOTRESP)
                                dispatch({
                                    type: GET_CATEGORIES,
                                    payload: []
                                });
                            }
                        )
                }
            }
        )
        .catch(err => {
                alert(TextConstants.SERVETNOTRESP)
                dispatch({
                    type: GET_CATEGORIES,
                    payload: []
                });
            }
        );
};

//Get categories
export const getCategories = () => dispatch => {
    GetCategories()
        .then(res =>
            dispatch({
                type: GET_CATEGORIES,
                payload: res.data
            })
        )
        .catch(err => {
                alert(TextConstants.SERVETNOTRESP)
                dispatch({
                    type: GET_CATEGORIES,
                    payload: []
                });
            }
        );
};

// Add Category
export const addCategory = newCategory => dispatch => {
    AddCategory(newCategory)
        .then(res => {
                if (res.data.success) {
                    GetCategories()
                        .then(res =>
                            dispatch({
                                type: GET_CATEGORIES,
                                payload: res.data
                            })
                        )
                        .catch(err => {
                                alert(TextConstants.SERVETNOTRESP)
                                dispatch({
                                    type: GET_CATEGORIES,
                                    payload: []
                                });
                            }
                        );
                } else {
                    alert('Category has already been added');
                }
            }
        )
        .catch(err => {
                alert(TextConstants.SERVETNOTRESP)
                dispatch({
                    type: GET_CATEGORIES,
                    payload: []
                });
            }
        );
};

// Del Category
export const delCategory = id => dispatch => {
    DelCategory(id)
        .then(res => {
                if (res.data.success) {
                    GetCategories()
                        .then(res =>
                            dispatch({
                                type: GET_CATEGORIES,
                                payload: res.data
                            })
                        )
                        .catch(err => {
                                alert(TextConstants.SERVETNOTRESP)
                                dispatch({
                                    type: GET_CATEGORIES,
                                    payload: []
                                });
                            }
                        )
                }
            }
        )
        .catch(err => {
                alert(TextConstants.SERVETNOTRESP)
                dispatch({
                    type: GET_CATEGORIES,
                    payload: []
                });
            }
        );
};

export const signOut = () => dispatch => {
    dispatch({
        type: SIGN_OUT,
    });
};
