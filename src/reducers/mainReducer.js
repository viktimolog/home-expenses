import {
  FIND_ITEMS,
  GET_ITEMS,
    CATEGORY_DOWN,
    CATEGORY_UP,
    DEL_CATEGORY,
    ADD_CATEGORY
} from '../actions/actionTypes'

const initialState = {
  items: [],//old state
    categories: [
        {
          id: '0',
          name: 'category 1',
            rating: 0,
            subCategories: []
        },
        {
            id: '1',
            name: 'category 2',
            rating: 1,
            subCategories: []
        },
        {
            id: '2',
            name: 'category 3',
            rating: 2,
            subCategories: []
        },
        {
            id: '3',
            name: 'category 4',
            rating: 3,
            subCategories: []
        },
        {
            id: '4',
            name: 'category 5',
            rating: 4,
            subCategories: []
        },
    ]
}

const mainReducer = (state = initialState, action) => {
  switch (action.type) {

      case ADD_CATEGORY: {

          let maxRating = 0;

          if(action.categories.length !== 0)
                 maxRating = action.categories.sort((a,b)=>a.rating < b.rating)[0].rating;

          const newCategory = {
              id: Math.floor(Date.now() / 1000),
              name: '',
              rating: maxRating + 1,
              subCategories: []
          }

          return {
              categories: [...state.categories, newCategory]
          }
      }

      case DEL_CATEGORY: {
          return {
              ...state,
              categories: state.categories.filter(category => category !== action.category)
          }
      }

      case CATEGORY_DOWN: {
          const maxRating = action.categories.sort((a,b)=>a.rating < b.rating)[0].rating;

          if(action.rating === maxRating) return {...state};

          const ratingUPcategory = action.categories.find(category => category.rating === action.rating+1);
          const ratingDOWNcategory = action.categories.find(category => category.rating === action.rating);

          const newUPcategory = {
              id: ratingUPcategory.id,
              name: ratingUPcategory.name,
              rating: ratingUPcategory.rating-1,
              subCategories: ratingUPcategory.subCategories
          }

          const newDOWNcategory = {
              id: ratingDOWNcategory.id,
              name: ratingDOWNcategory.name,
              rating: ratingDOWNcategory.rating+1,
              subCategories: ratingDOWNcategory.subCategories
          }


          return {
              ...state,
              categories: [...state.categories
                  .filter(category => category.rating !== action.rating)
                  .filter(category => category.rating !== action.rating+1),
                  newUPcategory, newDOWNcategory]
          }
      }

      case CATEGORY_UP: {
          if(action.rating === 0) return {...state};

          const ratingUPcategory = action.categories.find(category => category.rating === action.rating);
          const ratingDOWNcategory = action.categories.find(category => category.rating === action.rating-1);

          const newUPcategory = {
              id: ratingUPcategory.id,
              name: ratingUPcategory.name,
              rating: ratingUPcategory.rating-1,
              subCategories: ratingUPcategory.subCategories
          }

          const newDOWNcategory = {
              id: ratingDOWNcategory.id,
              name: ratingDOWNcategory.name,
              rating: ratingDOWNcategory.rating+1,
              subCategories: ratingDOWNcategory.subCategories
          }


          return {
              ...state,
              categories: [...state.categories
                  .filter(category => category.rating !== action.rating)
                  .filter(category => category.rating !== action.rating-1),
                  newUPcategory, newDOWNcategory]
          }
      }
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