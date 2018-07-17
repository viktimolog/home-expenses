import {
    GET_ITEMS,
    FIND_ITEMS,
    CATEGORY_DOWN,
    CATEGORY_UP,
    DEL_CATEGORY,
    ADD_CATEGORY
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