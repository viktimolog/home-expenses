import {
    FIND_ITEMS,
    GET_ITEMS,
    CATEGORY_DOWN,
    CATEGORY_UP,
    DEL_CATEGORY,
    ADD_CATEGORY,
    UPDATE_CATEGORYNAME,
    SUBCATEGORY_DOWN,
    SUBCATEGORY_UP
} from 'actions/actionTypes'

const initialState = {
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
            subCategories: [
                {
                    id: '0',
                    name: 'subCategory 1_5',
                    rating: 0
                },
                {
                    id: '1',
                    name: 'subCategory 2_5',
                    rating: 1
                },
                {
                    id: '2',
                    name: 'subCategory 3_5',
                    rating: 2
                }
            ]
        },
    ]
}

const mainReducer = (state = initialState, action) => {
    switch (action.type) {

        case UPDATE_CATEGORYNAME: {

            const updateCategory = {
                id: action.category.id,
                name: action.newName,
                rating: action.category.rating,
                subCategories: action.category.subCategories
            }

            return {
                categories: [...state.categories.filter(category => category !== action.category), updateCategory]
            }
        }

        case ADD_CATEGORY: {
            let maxRating = 0;

            if (action.categories.length !== 0)
                maxRating = action.categories.sort((a, b) => a.rating < b.rating)[0].rating;

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
            const maxRating = action.categories.sort((a, b) => a.rating < b.rating)[0].rating;

            if (action.rating === maxRating) return {...state};

            const ratingUPcategory = action.categories.find(category => category.rating === action.rating + 1);
            const ratingDOWNcategory = action.categories.find(category => category.rating === action.rating);

            const newUPcategory = {
                id: ratingUPcategory.id,
                name: ratingUPcategory.name,
                rating: ratingUPcategory.rating - 1,
                subCategories: ratingUPcategory.subCategories
            }

            const newDOWNcategory = {
                id: ratingDOWNcategory.id,
                name: ratingDOWNcategory.name,
                rating: ratingDOWNcategory.rating + 1,
                subCategories: ratingDOWNcategory.subCategories
            }


            return {
                ...state,
                categories: [...state.categories
                    .filter(category => category.rating !== action.rating)
                    .filter(category => category.rating !== action.rating + 1),
                    newUPcategory, newDOWNcategory]
            }
        }

        case CATEGORY_UP: {
            if (action.rating === 0) return {...state};

            const ratingUPcategory = action.categories.find(category => category.rating === action.rating);
            const ratingDOWNcategory = action.categories.find(category => category.rating === action.rating - 1);

            const newUPcategory = {
                id: ratingUPcategory.id,
                name: ratingUPcategory.name,
                rating: ratingUPcategory.rating - 1,
                subCategories: ratingUPcategory.subCategories
            }

            const newDOWNcategory = {
                id: ratingDOWNcategory.id,
                name: ratingDOWNcategory.name,
                rating: ratingDOWNcategory.rating + 1,
                subCategories: ratingDOWNcategory.subCategories
            }


            return {
                ...state,
                categories: [...state.categories
                    .filter(category => category.rating !== action.rating)
                    .filter(category => category.rating !== action.rating - 1),
                    newUPcategory, newDOWNcategory]
            }
        }

        //action.categories and action.category and action.subCategory - rating selected subCategory is there
        case SUBCATEGORY_UP: {
            if (action.subCategory.rating === 0) return {...state};


            // const newSubCategories


            const updatedCategory = {
                id: action.category.id,
                name: action.category.name,
                rating: action.category.rating,
                // subCategories: newSubCategories
            }

            const ratingUPsubCategory = action.categories.subCategories
                .find(category => category.rating === action.rating);

            const ratingDOWNsubCategory = action.categories.subCategories
                .find(category => category.rating === action.rating - 1);

            // const ratingUPcategory = action.categories.find(category => category.rating === action.rating);
            // const ratingDOWNcategory = action.categories.find(category => category.rating === action.rating - 1);

            // const newUPcategory = {
            //     id: ratingUPcategory.id,
            //     name: ratingUPcategory.name,
            //     rating: ratingUPcategory.rating - 1,
            //     subCategories: ratingUPcategory.subCategories
            // }
            //
            // const newDOWNcategory = {
            //     id: ratingDOWNcategory.id,
            //     name: ratingDOWNcategory.name,
            //     rating: ratingDOWNcategory.rating + 1,
            //     subCategories: ratingDOWNcategory.subCategories
            // }


            return {
                ...state,
                categories: [...state.categories
                    .filter(category => category !== action.category)
                    ,updatedCategory]
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