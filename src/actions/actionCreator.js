import {
    GET_ITEMS,
    FIND_ITEMS,
    CATEGORY_DOWN,
    CATEGORY_UP,
    DEL_CATEGORY,
    ADD_CATEGORY,
    UPDATE_CATEGORYNAME,
    SUBCATEGORY_DOWN,
    SUBCATEGORY_UP
} from 'actions/actionTypes'
import {
    GetItems
} from './axiosRequests'

export const findItems = text => dispatch => {
    GetItems()
        .then(res =>
            dispatch({
                type: FIND_ITEMS,
                data: res.data,
                text: text
            })
        )
        .catch(err => {
                console.log(err.toString())
                dispatch({
                    type: GET_ITEMS,
                    payload: []
                })
            }
        )
}

export const categoryUP = (categories, rating) => dispatch => {
            dispatch({
                type: CATEGORY_UP,
                categories: categories,
                rating: rating
            })
}

export const categoryDOWN = (categories, rating) => dispatch => {
    dispatch({
        type: CATEGORY_DOWN,
        categories: categories,
        rating: rating
    })
}

export const delCategory = category => dispatch => {
    dispatch({
        type: DEL_CATEGORY,
        category: category
    })
}

export const addCategory = categories => dispatch => {
    dispatch({
        type: ADD_CATEGORY,
        categories: categories
    })
}

export const updateCategoryName = (category, newName) => dispatch => {
    dispatch({
        type: UPDATE_CATEGORYNAME,
        category,
        newName
    })
}

export const subCategoryUP = (categories, category, subCategory) => dispatch => {
    dispatch({
        type: SUBCATEGORY_UP,
        categories,
        category,
        subCategory
    })
}

export const subCategoryDOWN = (categories, category, subCategory) => dispatch => {
    dispatch({
        type: SUBCATEGORY_DOWN,
        categories,
        category,
        subCategory
    })
}