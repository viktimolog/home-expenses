import {
    FIND_ITEMS,
    GET_ITEMS,
    CATEGORY_DOWN,
    CATEGORY_UP,
    DEL_CATEGORY,
    ADD_CATEGORY,
    UPDATE_CATEGORYNAME,
    SUBCATEGORY_DOWN,
    SUBCATEGORY_UP,
    DEL_SUBCATEGORY
} from 'actions/actionTypes'

const initialState = {
    categories: [
        {
            id: '0',
            name: 'category 1',
            rating: 0,
            parent: true
        },
        {
            id: '1',
            name: 'category 2',
            rating: 1,
            parent: false
        },
        {
            id: '2',
            name: 'category 3',
            rating: 2,
            parent: true
        },
        {
            id: '3',
            name: 'category 4',
            rating: 3,
            parent: true
        },
        {
            id: '4',
            name: 'category 5',
            rating: 4,
            parent: false
        },
        {
            id: '5',
            name: 'category 6',
            rating: 5,
            parent: true
        }
    ],
    subCategories: [
        {
            id: '0',
            idCategory: '4',
            name: 'category 4',
            rating: 0
        },
        {
            id: '5',
            idCategory: '1',
            name: 'category 3',
            rating: 0
        },
        {
            id: '6',
            idCategory: '1',
            name: 'category 6',
            rating: 1
        },
        {
            id: '7',
            idCategory: '0',
            name: 'category 1',
            rating: 0
        }
    ]
}

const mainReducer = (state = initialState, action) => {
    switch (action.type) {


        //action.category action.subcategory
        case DEL_SUBCATEGORY: {
            const updateCategory = {
                id: action.category.id,
                name: action.category.name,
                rating: action.category.rating,
                parent: false
            }

            return {
                ...state,
                categories: [...state.categories.filter(category => category !== action.category), updateCategory],
                subCategories: [...state.subCategories
                    .filter(subCategory => subCategory !== action.subCategory)]
            }
        }

        //action.category + action.newName
        case UPDATE_CATEGORYNAME: {

            const curSubCategories = [...state.subCategories
                    .filter(subCategory => subCategory.name === action.category.name)]

            let renameCurSubCategories = [];

            curSubCategories.map(subCategory => {

                const newSubCategory = {
                    id: subCategory.id,
                    idCategory: subCategory.idCategory,
                    name: action.newName,
                    rating: subCategory.rating
                }
                renameCurSubCategories.push(newSubCategory)
                }
            )

            const updateCategory = {
                id: action.category.id,
                name: action.newName,
                rating: action.category.rating,
                parent: action.category.parent
            }

            return {
                ...state,
                categories: [...state.categories.filter(category => category !== action.category), updateCategory],
                subCategories: [...state.subCategories
                    .filter(subCategory => subCategory.name !== action.category.name)]
                    .concat(renameCurSubCategories)
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
                parent: false
            }

            return {
                ...state,
                categories: [...state.categories, newCategory]
            }
        }

        case DEL_CATEGORY: {
            return {
                ...state,
                categories: [...state.categories.filter(category => category !== action.category)],
                subCategories: [...state.subCategories
                    .filter(subCategory => subCategory.name !== action.category.name)
                    .filter(subCategory => subCategory.idCategory !== action.category.id)]
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
                parent: ratingUPcategory.parent
            }

            const newDOWNcategory = {
                id: ratingDOWNcategory.id,
                name: ratingDOWNcategory.name,
                rating: ratingDOWNcategory.rating + 1,
                parent: ratingDOWNcategory.parent
            }


            return {
                ...state,
                categories: [...state.categories
                    .filter(category => category.rating !== action.rating)
                    .filter(category => category.rating !== action.rating - 1),
                    newUPcategory, newDOWNcategory]
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
                parent: ratingUPcategory.parent
            }

            const newDOWNcategory = {
                id: ratingDOWNcategory.id,
                name: ratingDOWNcategory.name,
                rating: ratingDOWNcategory.rating + 1,
                parent: ratingDOWNcategory.parent
            }


            return {
                ...state,
                categories: [...state.categories
                    .filter(category => category.rating !== action.rating)
                    .filter(category => category.rating !== action.rating + 1),
                    newUPcategory, newDOWNcategory]
            }
        }

        case SUBCATEGORY_DOWN: {
            const curSubCategories = [...state.subCategories
                .filter(subCategory => subCategory.idCategory === action.subCategory.idCategory)]

            const maxRating = curSubCategories.sort((a, b) => a.rating < b.rating)[0].rating;

            if (action.subCategory.rating === maxRating) return {...state};


            const ratingUPcategory = curSubCategories
                .find(subCategory => subCategory.rating === action.subCategory.rating + 1);
            const ratingDOWNcategory = curSubCategories
                .find(subCategory => subCategory.rating === action.subCategory.rating);

            const newUPcategory = {
                id: ratingUPcategory.id,
                idCategory: ratingUPcategory.idCategory,
                name: ratingUPcategory.name,
                rating: ratingUPcategory.rating - 1
            }

            const newDOWNcategory = {
                id: ratingDOWNcategory.id,
                idCategory: ratingDOWNcategory.idCategory,
                name: ratingDOWNcategory.name,
                rating: ratingDOWNcategory.rating + 1
            }


            return {
                ...state,
                subCategories: [...state.subCategories
                    .filter(category => category !== ratingUPcategory)
                    .filter(category => category !== ratingDOWNcategory),
                    newUPcategory, newDOWNcategory]
            }
        }

        case SUBCATEGORY_UP: {
            if (action.subCategory.rating === 0) return {...state};

            const curSubCategories = [...state.subCategories
                .filter(subCategory => subCategory.idCategory === action.subCategory.idCategory)]


            const ratingUPcategory = curSubCategories
                .find(subCategory => subCategory.rating === action.subCategory.rating);
            const ratingDOWNcategory = curSubCategories
                .find(subCategory => subCategory.rating === action.subCategory.rating - 1);

            const newUPcategory = {
                id: ratingUPcategory.id,
                idCategory: ratingUPcategory.idCategory,
                name: ratingUPcategory.name,
                rating: ratingUPcategory.rating - 1
            }

            const newDOWNcategory = {
                id: ratingDOWNcategory.id,
                idCategory: ratingDOWNcategory.idCategory,
                name: ratingDOWNcategory.name,
                rating: ratingDOWNcategory.rating + 1
            }


            return {
                ...state,
                subCategories: [...state.subCategories
                    .filter(category => category !== ratingUPcategory)
                    .filter(category => category !== ratingDOWNcategory),
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