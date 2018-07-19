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
    expenses:[
        {
            id: '22',
            date: 'Sun Jul 15 2018',
            category: 'Category 1',
            expense: 'expense 1',
            valueUAH: 12.34
        },
        {
            id: '21',
            date: 'Sun Jul 15 2018',
            category: 'Category 2',
            expense: '',
            valueUAH: 24.68
        },
        {
            id: '20',
            date: 'Sun Jul 15 2018',
            category: 'Category 3',
            expense: 'expense 3',
            valueUAH: 37.02
        },
        {
            id: '19',
            date: 'Sun Jul 15 2018',
            category: 'Category 4',
            expense: '',
            valueUAH: 54.07
        },
        {
            id: '18',
            date: 'Sun Jul 15 2018',
            category: 'Category 5',
            expense: 'expense 5',
            valueUAH: 49.36
        },
        {
            id: '17',
            date: 'Sun Jul 15 2018',
            category: 'Category 6',
            expense: '',
            valueUAH: 61.70
        },
        {
            id: '16',
            date: 'Sun Jul 15 2018',
            category: 'Category 7',
            expense: 'expense 7',
            valueUAH: 74.04
        },
        {
            id: '15',
            date: 'Sun Jul 15 2018',
            category: 'Category 8',
            expense: '',
            valueUAH: 86.38
        },
        {
            id: '14',
            date: 'Sun Jul 15 2018',
            category: 'Category 9',
            expense: 'expense 9',
            valueUAH: 98.72
        },
        {
            id: '13',
            date: 'Sun Jul 15 2018',
            category: 'Category 10',
            expense: '',
            valueUAH: 234.08
        },
        {
            id: '12',
            date: 'Sun Jul 15 2018',
            category: 'Category 11',
            expense: 'expense 11',
            valueUAH: 23.12
        },
        {
            id: '11',
            date: 'Sun Jul 15 2018',
            category: 'Category 12',
            expense: '',
            valueUAH: 56.43
        },
        {
            id: '10',
            date: 'Sun Jul 15 2018',
            category: 'Category 13',
            expense: 'expense 13',
            valueUAH: 33.11
        },
        {
            id: '9',
            date: 'Sun Jul 15 2018',
            category: 'Category 14',
            expense: '',
            valueUAH: 67.28
        },
        {
            id: '8',
            date: 'Sun Jul 15 2018',
            category: 'Category 15',
            expense: 'expense 15',
            valueUAH: 17.98
        },
        {
            id: '7',
            date: 'Sun Jul 15 2018',
            category: 'Category 16',
            expense: '',
            valueUAH: 73.22
        },
        {
            id: '6',
            date: 'Sun Jul 15 2018',
            category: 'Category 17',
            expense: 'expense 17',
            valueUAH: 21.75
        },
        {
            id: '5',
            date: 'Sun Jul 15 2018',
            category: 'Category 18',
            expense: '',
            valueUAH: 18.00
        },
        {
            id: '4',
            date: 'Sun Jul 15 2018',
            category: 'Category 19',
            expense: 'expense 19',
            valueUAH: 19.19
        },
        {
            id: '3',
            date: 'Sun Jul 15 2018',
            category: 'Category 20',
            expense: '',
            valueUAH: 20.20
        },
        {
            id: '2',
            date: 'Sun Jul 15 2018',
            category: 'Category 21',
            expense: 'expense 21',
            valueUAH: 21.21
        },
        {
            id: '1',
            date: 'Sun Jul 15 2018',
            category: 'Category 22',
            expense: '',
            valueUAH: 22.00
        },
        {
            id: '0',
            date: 'Sun Jul 15 2018',
            category: 'Category 23',
            expense: 'expense 23',
            valueUAH: 23.23
        },
    ],
    userEmail: 'testUserEmailFromState',
    userPassword: 'testUserPasswordFromState',
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
            child: false
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


        //action.category and action.newSubCategory - real category
        case ADD_SUBCATEGORY: {

            let maxRating = 0;

            const subCategories = [...state.subCategories
                .filter(subCategory => subCategory.idCategory === action.category.id)]

            const categorySetChild = {
                id: action.newSubCategory.id,
                name: action.newSubCategory.name,
                rating: action.newSubCategory.rating,
                parent: action.newSubCategory.parent,
                child: true
            }

            if (subCategories.length !== 0)
                maxRating = subCategories.sort((a, b) => a.rating < b.rating)[0].rating;


            const updateCategory = {
                id: action.category.id,
                name: action.category.name,
                rating: action.category.rating,
                parent: true,
                child: action.category.child
            }

            const newSubCategory = {
                id: Math.floor(Date.now() / 1000),
                idCategory: action.category.id,
                name: action.newSubCategory.name,
                rating: maxRating + 1,
                idParent: action.newSubCategory.id
            }

            return {
                ...state,
                categories: [...state.categories
                    .filter(category => category.id !== action.category.id)
                    .filter(category => category.id !== action.newSubCategory.id)
                    , updateCategory, categorySetChild],
                subCategories: [...state.subCategories, newSubCategory]
            }
        }


        //action.category and action.subCategory
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

            const countSubCatSelectedCategory = [...state.subCategories
                .filter(sub => sub.idParent === selectedCategory.id)].length

            const updateParentCategory = {
                id: action.category.id,
                name: action.category.name,
                rating: action.category.rating,
                parent: countSubCatSelectedCategory !== 1,
                child: action.category.child
            }

            return {
                ...state,
                categories: [...state.categories
                    .filter(category => category.id !== selectedCategory.id)
                    .filter(category => category.id !== action.category.id)
                    , updateCategory, updateParentCategory],
                subCategories: [...state.subCategories
                    .filter(subCategory => subCategory.id !== action.subCategory.id)]
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
                categories: [...state.categories.filter(category => category.id !== action.category.id), updateCategory],
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
                categories: [...state.categories.filter(category => category.id !== action.category.id)],
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
                    .filter(category => category.id !== ratingUPcategory.id)
                    .filter(category => category.id !== ratingDOWNcategory.id),
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
                    .filter(category => category.id !== ratingUPcategory.id)
                    .filter(category => category.id !== ratingDOWNcategory.id),
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