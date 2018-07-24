import {
    GET_ITEMS,
    FIND_ITEMS,
    CATEGORY_DOWN,
    CATEGORY_UP,
    DEL_CATEGORY,
    ADD_CATEGORY,
    UPDATE_CATEGORYNAME,
    SUBCATEGORY_DOWN,
    SUBCATEGORY_UP,
    DEL_SUBCATEGORY,
    ADD_SUBCATEGORY,
    ADD_EXPENSES,
    GET_CATEGORIES,
    GET_SUBCATEGORIES,
    GET_EXPENSES,
    SIGN_OUT,
    SIGN_IN,
    SIGN_UP
} from 'actions/actionTypes'
import {TextConstants} from 'constants/TextConstants'
import {
    GetCategories, UpdateCategory, AddCategory, DelCategory, AddSubCategory, GetSubCategories, AddExpense, GetExpenses,
    DelSubCategory, UpdateExpense, UpdateSubCategory, Signin
} from './axiosRequests'

export const signin = user => dispatch => {
    Signin(user)
        .then(res => {
                if (res.data.success){
                    dispatch({
                        type: SIGN_IN,
                        email: res.data.payload.email,
                        isUser: true,
                        token: res.data.token,
                        idUser: res.data.payload.id,
                        avatar: res.data.payload.avatar
                    })
                }
                else{
                    alert(res.data.message);
                    console.log(res.data.message);
                    dispatch({
                        type: SIGN_IN,
                        email: '',
                        isUser: false,
                        token: '',
                        idUser: '',
                        avatar: ''
                    })
                }
            }
        )
}

export const updateSubCategory = (_id, subCategory) => dispatch => {
    UpdateSubCategory(_id, subCategory)
        .then(res => {
                // alert(res.data.success)
                if (res.data.success) {
                    GetSubCategories()
                        .then(res => {
                                dispatch({
                                    type: GET_SUBCATEGORIES,
                                    payload: res.data
                                })
                            }
                        )
                        .catch(err => {
                                // alert(TextConstants.SERVETNOTRESP)
                                alert('second catch updateSubCategory')
                                dispatch({
                                    type: GET_SUBCATEGORIES,
                                    payload: []
                                })
                            }
                        );
                }
                // else {
                //     // alert(TextConstants.SERVETNOTRESP)
                //     alert('third catch updateSubCategory')
                //     dispatch({
                //         type: GET_CATEGORIES,
                //         payload: []
                //     })
                // }
            }
        )
        .catch(err => {
                // alert(TextConstants.SERVETNOTRESP)
                alert('fourth catch updateSubCategory')
                dispatch({
                    type: GET_SUBCATEGORIES,
                    payload: []
                })
            }
        )
}

export const updateExpense = (_id, expense) => dispatch => {
    UpdateExpense(_id, expense)
        .then(res => {
                // alert(res.data.success)//true, false - badly
                if (res.data.success) {
                    GetExpenses()
                        .then(res =>
                            dispatch({
                                type: GET_EXPENSES,
                                payload: res.data
                            })
                        )
                        .catch(err => {
                                // alert(TextConstants.SERVETNOTRESP)
                                alert('first catch updateExpense')
                                dispatch({
                                    type: GET_EXPENSES,
                                    payload: []
                                })
                            }
                        )
                }
                else {
                    // alert(TextConstants.SERVETNOTRESP)
                    alert('else updateExpense')
                    dispatch({
                        type: GET_EXPENSES,
                        payload: []
                    })
                }
            }
        )
        .catch(err => {
                // alert(TextConstants.SERVETNOTRESP)
                alert('second catch updateExpense')
                dispatch({
                    type: GET_EXPENSES,
                    payload: []
                })
            }
        )
}


// Del SubCategory
export const delSubCategory = id => dispatch => {
    DelSubCategory(id)
        .then(res => {
                if(res.data.success)
                    GetCategories()
                        .then(res =>
                            dispatch({
                                type: GET_CATEGORIES,
                                payload: res.data
                            })
                        )
                        .catch(err => {
                                // alert(TextConstants.SERVETNOTRESP)
                            alert('first catch delSubCategory')
                                dispatch({
                                    type: GET_CATEGORIES,
                                    payload: []
                                })
                            }
                        )
                    .then(res => GetSubCategories()
                    .then(res => {
                            dispatch({
                                type: GET_SUBCATEGORIES,
                                payload: res.data
                            })
                        }
                    )
                    .catch(err => {
                            // alert(TextConstants.SERVETNOTRESP)
                        alert('second catch delSubCategory')
                            dispatch({
                                type: GET_SUBCATEGORIES,
                                payload: []
                            })
                        }
                    )
                    )
            }
        )
        .catch(err => {
                // alert(TextConstants.SERVETNOTRESP)
            alert('third catch delSubCategory')
                dispatch({
                    type: GET_CATEGORIES,
                    payload: []
                })
            }
        )
}

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
                // alert(TextConstants.SERVETNOTRESP)
            alert('first catch getExpenses')
                dispatch({
                    type: GET_EXPENSES,
                    payload: []
                })
            }
        )
}

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
                                // alert(TextConstants.SERVETNOTRESP)
                                alert('first catch addExpense')
                                dispatch({
                                    type: GET_EXPENSES,
                                    payload: []
                                })
                            }
                        )
                }
            }
        )
        .catch(err => {
                // alert(TextConstants.SERVETNOTRESP)
            alert('second catch addExpense')
                dispatch({
                    type: GET_EXPENSES,
                    payload: []
                })
            }
        )

}

export const updateCategory = (_id, category, token) => dispatch => {
    UpdateCategory(_id, category, token)
        .then(res => {
            // alert(res.data.success)//true, false - badly
                if (res.data.success) {
                    GetCategories(token)
                        .then(res =>
                            dispatch({
                                type: GET_CATEGORIES,
                                payload: res.data
                            })
                        )
                        .catch(err => {
                                // alert(TextConstants.SERVETNOTRESP)
                            alert('first catch updateCategory')
                                dispatch({
                                    type: GET_CATEGORIES,
                                    payload: []
                                })
                            }
                        )
                        .then(res => GetSubCategories(token)
                        .then(res => {
                                dispatch({
                                    type: GET_SUBCATEGORIES,
                                    payload: res.data
                                })
                            }
                        )
                        .catch(err => {
                                // alert(TextConstants.SERVETNOTRESP)
                            alert('second catch updateCategory')
                                dispatch({
                                    type: GET_SUBCATEGORIES,
                                    payload: []
                                })
                            }
                        )
                        )
                }
                // else {
                //     // alert(TextConstants.SERVETNOTRESP)
                //     alert('third catch updateCategory')
                //     dispatch({
                //         type: GET_CATEGORIES,
                //         payload: []
                //     })
                // }
            }
        )
        .catch(err => {
                // alert(TextConstants.SERVETNOTRESP)
            alert('fourth catch updateCategory')
                dispatch({
                    type: GET_CATEGORIES,
                    payload: []
                })
            }
        )
}

export const addSubCategory = newSubCategory => dispatch => {
    AddSubCategory(newSubCategory)
        .then(res => {
                if(res.data.success) {
                    GetSubCategories()
                        .then(res => {
                                dispatch({
                                    type: GET_SUBCATEGORIES,
                                    payload: res.data
                                })
                            }
                        )
                        .catch(err => {
                                // alert(TextConstants.SERVETNOTRESP)
                                alert('first catch addSubCategory')
                                dispatch({
                                    type: GET_SUBCATEGORIES,
                                    payload: []
                                })
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
                                // alert(TextConstants.SERVETNOTRESP)
                            alert('second catch addSubCategory')
                                dispatch({
                                    type: GET_CATEGORIES,
                                    payload: []
                                })
                            }
                        )
                    )
                } else {
                    alert('SubCategory has already been added')
                }
            }
        )
        .catch(err => {
                // alert(TextConstants.SERVETNOTRESP)
            alert('third catch addSubCategory')
                dispatch({
                    type: GET_SUBCATEGORIES,
                    payload: []
                })
            }
        )
}

//Get SubCategories
export const getSubCategories = () => dispatch => {
    GetSubCategories()
        .then(res =>
            dispatch({
                type: GET_SUBCATEGORIES,
                payload: res.data
            })
        )
        .catch(err => {
                // alert(TextConstants.SERVETNOTRESP)
            alert('first catch getSubCategories')
                dispatch({
                    type: GET_SUBCATEGORIES,
                    payload: []
                })
            }
        )
}


//Get categories
export const getCategories = token => dispatch => {
    GetCategories(token)
        .then(res =>
            dispatch({
                type: GET_CATEGORIES,
                payload: res.data
            })
        )
        .catch(err => {
                // alert(TextConstants.SERVETNOTRESP)
            alert('first catch getCategories')
                dispatch({
                    type: GET_CATEGORIES,
                    payload: []
                })
            }
        )
}

// Add Category
export const addCategory = (newCategory, token) => dispatch => {
    AddCategory(newCategory, token)
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
                                // alert(TextConstants.SERVETNOTRESP)
                            alert('first catch addCategory')
                                dispatch({
                                    type: GET_CATEGORIES,
                                    payload: []
                                })
                            }
                        )
                } else {
                    alert('Category has already been added')
                }
            }
        )
        .catch(err => {
                // alert(TextConstants.SERVETNOTRESP)
            alert('second catch addCategory')
                dispatch({
                    type: GET_CATEGORIES,
                    payload: []
                })
            }
        )
}

// Del Category
export const delCategory = (id, token) => dispatch => {
    // alert('delCategory')//ok
    DelCategory(id, token)
        .then(res => {
            // alert('res.data.success = '+res.data.success)
            if(res.data.success)
                GetCategories()
                    .then(res =>
                        dispatch({
                            type: GET_CATEGORIES,
                            payload: res.data
                        })
                    )
                    .catch(err => {
                            // alert(TextConstants.SERVETNOTRESP)
                        alert('first catch delCategory')
                            dispatch({
                                type: GET_CATEGORIES,
                                payload: []
                            })
                        }
                    )
                .then(res => GetSubCategories()
                .then(res => {
                        dispatch({
                            type: GET_SUBCATEGORIES,
                            payload: res.data
                        })
                    }
                )
                .catch(err => {
                        // alert(TextConstants.SERVETNOTRESP)
                    alert('second catch delCategory')
                        dispatch({
                            type: GET_SUBCATEGORIES,
                            payload: []
                        })
                    }
                )
                )
        }
    )
        .catch(err => {
                // alert(TextConstants.SERVETNOTRESP)
            alert('third catch delCategory')
                dispatch({
                    type: GET_CATEGORIES,
                    payload: []
                })
            }
        )
}

export const signOut = () => dispatch => {
    dispatch({
        type: SIGN_OUT,
    })
}

export const getInitialState = token  => dispatch => {
    GetCategories(token)
        .then(res =>
            dispatch({
                type: GET_CATEGORIES,
                payload: res.data
            })
        )
        .catch(err => {
                // alert(TextConstants.SERVETNOTRESP)
                alert('first catch GetCategories')
                dispatch({
                    type: GET_CATEGORIES,
                    payload: []
                })
            }
        )
        .then(res => GetSubCategories()
            .then(res => {
                    dispatch({
                        type: GET_SUBCATEGORIES,
                        payload: res.data
                    })
                }
            )
            .catch(err => {
                    // alert(TextConstants.SERVETNOTRESP)
                    alert('second catch GetSubCategories')
                    dispatch({
                        type: GET_SUBCATEGORIES,
                        payload: []
                    })
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
                    // alert(TextConstants.SERVETNOTRESP)
                    alert('first catch GetExpenses')
                    dispatch({
                        type: GET_EXPENSES,
                        payload: []
                    })
                }
            )
        )
}

//todo
export const categoryUP = (categories, rating) => dispatch => {
    dispatch({
        type: CATEGORY_UP,
        categories,
        rating
    })
}

export const categoryDOWN = (categories, rating) => dispatch => {
    dispatch({
        type: CATEGORY_DOWN,
        categories,
        rating
    })
}

export const subCategoryUP = subCategory => dispatch => {
    dispatch({
        type: SUBCATEGORY_UP,
        subCategory
    })
}

export const subCategoryDOWN = subCategory => dispatch => {
    dispatch({
        type: SUBCATEGORY_DOWN,
        subCategory
    })
}
