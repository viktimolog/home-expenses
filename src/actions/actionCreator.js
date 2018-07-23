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
    DelSubCategory
} from './axiosRequests'


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
                        alert('second catch delSubCategory')
                            dispatch({
                                type: GET_SUBCATEGORIES,
                                payload: []
                            })
                        }
                    );
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
                                alert(TextConstants.SERVETNOTRESP)
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
                alert(TextConstants.SERVETNOTRESP)
                dispatch({
                    type: GET_EXPENSES,
                    payload: []
                })
            }
        )

}

export const updateCategory = (_id, category) => dispatch => {
    UpdateCategory(_id, category)
        .then(res => {
            // alert(res.data.success)//true, false - badly
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
                            alert('first catch updateCategory')
                                dispatch({
                                    type: GET_CATEGORIES,
                                    payload: []
                                })
                            }
                        )
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
                            alert('second catch updateCategory')
                                dispatch({
                                    type: GET_SUBCATEGORIES,
                                    payload: []
                                })
                            }
                        );
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
                        );
                    GetCategories()
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
export const getCategories = () => dispatch => {
    GetCategories()
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
                                })
                            }
                        )
                } else {
                    alert('Category has already been added')
                }
            }
        )
        .catch(err => {
                alert(TextConstants.SERVETNOTRESP)
                dispatch({
                    type: GET_CATEGORIES,
                    payload: []
                })
            }
        )
}

// Del Category
export const delCategory = category => dispatch => {
    DelCategory(category._id)
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
                            alert(TextConstants.SERVETNOTRESP)
                            dispatch({
                                type: GET_CATEGORIES,
                                payload: []
                            })
                        }
                    )
            GetSubCategories()
                .then(res => {
                        dispatch({
                            type: GET_SUBCATEGORIES,
                            payload: res.data
                        })
                    }
                )
                .catch(err => {
                        alert(TextConstants.SERVETNOTRESP)
                        dispatch({
                            type: GET_SUBCATEGORIES,
                            payload: []
                        })
                    }
                );
        }
    )
        .catch(err => {
                alert(TextConstants.SERVETNOTRESP)
                dispatch({
                    type: GET_CATEGORIES,
                    payload: []
                })
            }
        )
}

// export const updateCategoryName = (category, newName) => dispatch => {
//     dispatch({
//         type: UPDATE_CATEGORYNAME,
//         category,
//         newName
//     })
// }

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

export const signOut = () => dispatch => {
    dispatch({
        type: SIGN_OUT,
    })
}

export const getInitialState = () => {
    getCategories();
    getSubCategories();
}