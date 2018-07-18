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
    DEL_SUBCATEGORY,
    ADD_SUBCATEGORY
} from 'actions/actionTypes'

const initialState = {
    categories: [
        {
            id: '0',
            name: 'category 1',
            rating: 0,
            parent: false,
            child: true
        },
        {
            id: '1',
            name: 'category 2',
            rating: 1,
            parent: true,
            child: false
        },
        {
            id: '2',
            name: 'category 3',
            rating: 2,
            parent: true,
            child: true
        },
        {
            id: '3',
            name: 'category 4',
            rating: 3,
            parent: false,
            child: true
        },
        {
            id: '4',
            name: 'category 5',
            rating: 4,
            parent: true,
            child: false
        },
        {
            id: '5',
            name: 'category 6',
            rating: 5,
            parent: false,
            child: true
        },
        {
            id: '6',
            name: 'category 7',
            rating: 6,
            parent: false,
            child: false
        },
        {
            id: '7',
            name: 'category 8',
            rating: 7,
            parent: false,
            child: false
        }
    ],
    subCategories: [
        {
            id: '0',
            idCategory: '4',
            name: 'category 4',
            rating: 0,
            idParent: '3'
        },
        {
            id: '1',
            idCategory: '1',
            name: 'category 3',
            rating: 0,
            idParent: '2'
        },
        {
            id: '2',
            idCategory: '1',
            name: 'category 6',
            rating: 1,
            idParent: '5'
        },
        {
            id: '3',
            idCategory: '2',
            name: 'category 1',
            rating: 0,
            idParent: '0'
        }
    ]
}

const mainReducer = (state = initialState, action) => {
    switch (action.type) {


        //action.category and action.newSubCategory - real category//TODO
        case ADD_SUBCATEGORY: {

            // console.log('consolelog state.subCategories = ', state.subCategories)
            // console.log('consolelog state.categories = ', state.categories)

            let maxRating = 0;

            const subCategories = [...state.subCategories
                .filter(subCategory => subCategory.idCategory === action.category.id)]

            // console.log('consolelog action.category = ', action.category)//OK

            // console.log('consolelog action.newSubCategory = ', action.newSubCategory)//OK-2


            const categorySetChild = {
                id: action.newSubCategory.id,
                name: action.newSubCategory.name,
                rating: action.newSubCategory.rating,
                parent: action.newSubCategory.parent,
                child: true
            }

            // console.log('consolelog categorySetChild = ', categorySetChild)

            if (subCategories.length !== 0)
                maxRating = subCategories.sort((a, b) => a.rating < b.rating)[0].rating;


            const updateCategory = {
                id: action.category.id,
                name: action.category.name,
                rating: action.category.rating,
                parent: true,
                child: action.category.child
            }

            // console.log('consolelog updateCategory = ', updateCategory)

            const newSubCategory = {
                id: Math.floor(Date.now() / 1000),
                idCategory: action.category.id,
                name: action.newSubCategory.name,
                rating: maxRating + 1,
                idParent: action.newSubCategory.id
            }

            console.log('consolelog newSubCategory = ', newSubCategory)//?

            return {
                ...state,
                categories: [...state.categories
                    .filter(category => category !== action.category)
                    .filter(category => category !== action.newSubCategory)
                    , updateCategory, categorySetChild],
                subCategories: [...state.subCategories, newSubCategory]
            }
        }


        //TODO action.category - delete
        //action.subCategory
        case DEL_SUBCATEGORY: {

            const selectedCategory = {
                ...state.categories
                    .find(category => category.id === action.subCategory.idParent)
            }

            const updateCategory = {
                id: selectedCategory.id,
                name: selectedCategory.name,
                rating: selectedCategory.rating,
                parent: selectedCategory.parent,
                child: false
            }

            return {
                ...state,
                categories: [...state.categories.filter(category => category !== selectedCategory)
                    , updateCategory],
                subCategories: [...state.subCategories
                    .filter(subCategory => subCategory !== action.subCategory)]
            }
        }

        //action.category + action.newName
        case UPDATE_CATEGORYNAME: {

            //really that subcategory only one, but it is true today
            const curSubCategories = [...state.subCategories
                .filter(subCategory => subCategory.idParent === action.category.id)]

            let renameCurSubCategories = [];

            curSubCategories.map(subCategory => {

                    const newSubCategory = {
                        id: subCategory.id,
                        idCategory: subCategory.idCategory,
                        name: action.newName,
                        rating: subCategory.rating,
                        idParent: subCategory.idParent
                    }
                    renameCurSubCategories.push(newSubCategory)
                }
            )

            const updateCategory = {
                id: action.category.id,
                name: action.newName,
                rating: action.category.rating,
                parent: action.category.parent,
                child: action.category.child
            }

            return {
                ...state,
                categories: [...state.categories.filter(category => category !== action.category), updateCategory],
                subCategories: [...state.subCategories
                    .filter(subCategory => subCategory.idParent !== action.category.id)]
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
                parent: false,
                child: false
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
                    .filter(subCategory => subCategory.idParent !== action.category.id)//her from subCategory
                    .filter(subCategory => subCategory.idCategory !== action.category.id)]//all her
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
                parent: ratingUPcategory.parent,
                child: ratingUPcategory.child
            }

            const newDOWNcategory = {
                id: ratingDOWNcategory.id,
                name: ratingDOWNcategory.name,
                rating: ratingDOWNcategory.rating + 1,
                parent: ratingDOWNcategory.parent,
                child: ratingDOWNcategory.child
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
                parent: ratingUPcategory.parent,
                child: ratingUPcategory.child
            }

            const newDOWNcategory = {
                id: ratingDOWNcategory.id,
                name: ratingDOWNcategory.name,
                rating: ratingDOWNcategory.rating + 1,
                parent: ratingDOWNcategory.parent,
                child: ratingDOWNcategory.child
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
                rating: ratingUPcategory.rating - 1,
                idParent: ratingUPcategory.idParent
            }

            const newDOWNcategory = {
                id: ratingDOWNcategory.id,
                idCategory: ratingDOWNcategory.idCategory,
                name: ratingDOWNcategory.name,
                rating: ratingDOWNcategory.rating + 1,
                idParent: ratingDOWNcategory.idParent
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
                rating: ratingUPcategory.rating - 1,
                idParent: ratingUPcategory.idParent
            }

            const newDOWNcategory = {
                id: ratingDOWNcategory.id,
                idCategory: ratingDOWNcategory.idCategory,
                name: ratingDOWNcategory.name,
                rating: ratingDOWNcategory.rating + 1,
                idParent: ratingDOWNcategory.idParent
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