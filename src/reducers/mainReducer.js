import {
  FIND_ITEMS,
  GET_ITEMS
} from '../actions/actionTypes'

const initialState = {
  items: [],
  // curItem: false
}

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ITEMS: {
      return {
        ...state,
        items: action.payload
      }
    }

    case FIND_ITEMS: {
      if (action.text === '')
        return {
          ...state,
          items: action.data
        }

      let arr = []
      action.data.forEach(obj => {
        for (let k in obj) {
          const curObj = obj[k]
          if (k === 'general') {
            if (Object.values(curObj).slice(0, -1).join(' ').toLowerCase().includes(action.text.toLowerCase())) {
              arr.push(obj)
              break
            }
          } else if (Object.values(curObj).join(' ').toLowerCase().includes(action.text.toLowerCase())) {
            arr.push(obj)
            break
          }
        }
      })

      return {
        ...state,
        items: arr
      }
    }

    default:
      return state
  }
}

export default mainReducer