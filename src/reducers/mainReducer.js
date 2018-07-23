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
    ADD_SUBCATEGORY,
    ADD_EXPENSES,
    GET_CATEGORIES,
    GET_SUBCATEGORIES,
    GET_EXPENSES,
    SIGN_OUT,
    SIGN_IN,
    SIGN_UP
} from 'actions/actionTypes'

// beginDate: 1521991436550,
// endDate: 1541991436550

//1531991436550
const initialState = {
    // expenses: [
    //     {
    //         id: '22',
    //         date: 1531991436550,
    //         category: 'Category 1',
    //         expense: 'expense 1',
    //         valueUAH: 12.34,
    //         idCategory: '0'
    //     },
    //     {
    //         id: '21',
    //         date: 1531991436550,
    //         category: 'Category 2',
    //         expense: '',
    //         valueUAH: 24.68,
    //         idCategory: '1'
    //     },
    //     {
    //         id: '20',
    //         date: 1531991436550,
    //         category: 'Category 3',
    //         expense: 'expense 3',
    //         valueUAH: 37.02,
    //         idCategory: '2'
    //     },
    //     {
    //         id: '19',
    //         date: 1531991436550,
    //         category: 'Category 4',
    //         expense: '',
    //         valueUAH: 54.07,
    //         idCategory: '3'
    //     },
    //     {
    //         id: '18',
    //         date: 1531991436550,
    //         category: 'Category 5',
    //         expense: 'expense 5',
    //         valueUAH: 49.36,
    //         idCategory: '4'
    //     },
    //     {
    //         id: '17',
    //         date: 1531991436550,
    //         category: 'Category 6',
    //         expense: '',
    //         valueUAH: 61.70,
    //         idCategory: '5'
    //     },
    //     {
    //         id: '16',
    //         date: 1531991436550,
    //         category: 'Category 7',
    //         expense: 'expense 7',
    //         valueUAH: 74.04,
    //         idCategory: '6'
    //     },
    //     {
    //         id: '15',
    //         date: 1531991436550,
    //         category: 'Category 8',
    //         expense: '',
    //         valueUAH: 86.38,
    //         idCategory: '7'
    //     },
    // ],
    email: 'testUserEmailFromState',
    isUser: 'true',
    token: '',
    categories: [],
    subCategories: [],
    expenses:[]
    // categories: [
    //     {
    //         name: 'category 1',
    //         rating: 0,
    //         parent: false,
    //         child: true
    //     },
    //     {
    //         id: '1',
    //         name: 'category 2',
    //         rating: 1,
    //         parent: true,
    //         child: false
    //     },
    //     {
    //         id: '2',
    //         name: 'category 3',
    //         rating: 2,
    //         parent: true,
    //         child: false
    //     },
    //     {
    //         id: '3',
    //         name: 'category 4',
    //         rating: 3,
    //         parent: false,
    //         child: true
    //     },
    //     {
    //         id: '4',
    //         name: 'category 5',
    //         rating: 4,
    //         parent: true,
    //         child: false
    //     },
    //     {
    //         id: '5',
    //         name: 'category 6',
    //         rating: 5,
    //         parent: false,
    //         child: true
    //     },
    //     {
    //         id: '6',
    //         name: 'category 7',
    //         rating: 6,
    //         parent: false,
    //         child: false
    //     },
    //     {
    //         id: '7',
    //         name: 'category 8',
    //         rating: 7,
    //         parent: false,
    //         child: false
    //     }
    // ],
    // subCategories: [
    //     {
    //         idCategory: '4',
    //         rating: 0,
    //         idParent: '3'
    //     },
    //     {
    //         id: '2',
    //         idCategory: '1',
    //         name: 'category 6',
    //         rating: 1,
    //         idParent: '5'
    //     },
    //     {
    //         id: '3',
    //         idCategory: '2',
    //         name: 'category 1',
    //         rating: 0,
    //         idParent: '0'
    //     }
    // ]
}

const mainReducer = (state = initialState, action) => {
    switch (action.type) {

        //action.category, only _id needed do not use ?
        // case DEL_CATEGORY: {
        //     alert('action.category._id = ',action.category._id)
        //     console.log('consolelog action.category._id = ',action.category._id )
        //     return {
        //         ...state,
        //         categories: [...state.categories.filter(category => category._id !== action.category._id)],
        //         subCategories: [...state.subCategories
        //             .filter(subCategory => subCategory.idParent !== action.category._id)// del her from subCategory
        //             .filter(subCategory => subCategory.idCategory !== action.category._id)],//del all her subCategory
        //         expenses: [...state.expenses.filter(expense => expense.idCategory !== action.category._id)]//todo
        //     }
        // }

        // case ADD_CATEGORY: {
        //     return {
        //         ...state,
        //         categories: [...state.categories, action.payload]
        //     }
        // }

        case GET_CATEGORIES: {
            return {
                ...state,
                categories: action.payload
            }
        }

        case SIGN_OUT: {
            return {
                ...state,
                email: '',
                isUser: 'false',
                token: '',
                categories: [],
                subCategories: [],
                expenses: []
            }
        }

        case GET_SUBCATEGORIES: {
            return {
                ...state,
                subCategories: action.payload
            }
        }

        case GET_EXPENSES: {
            return {
                ...state,
                expenses: action.payload
            }
        }

        //action.newExpense
        // case ADD_EXPENSES: {
        //     return {
        //         ...state,
        //         expenses: [...state.expenses, action.newExpense]
        //     }
        // }

        //action.category and action.newSubCategory - real category  do not use?
        // case ADD_SUBCATEGORY: {
        //
        //     let maxRating = 0;
        //
        //     const subCategories = [...state.subCategories
        //         .filter(subCategory => subCategory.idCategory === action.category.id)]
        //
        //     const categorySetChild = {
        //         id: action.newSubCategory.id,
        //         name: action.newSubCategory.name,
        //         rating: action.newSubCategory.rating,
        //         parent: action.newSubCategory.parent,
        //         child: true
        //     }
        //
        //     if (subCategories.length > 1)
        //         maxRating = subCategories.sort((a, b) => a.rating < b.rating)[0].rating;
        //
        //
        //     const updateCategory = {
        //         id: action.category.id,
        //         name: action.category.name,
        //         rating: action.category.rating,
        //         parent: true,
        //         child: action.category.child
        //     }
        //
        //     const newSubCategory = {
        //         id: Math.floor(Date.now() / 1000) + '',
        //         idCategory: action.category.id,
        //         name: action.newSubCategory.name,
        //         rating: maxRating + 1,
        //         idParent: action.newSubCategory.id
        //     }
        //
        //     return {
        //         ...state,
        //         categories: [...state.categories
        //             .filter(category => category.id !== action.category.id)
        //             .filter(category => category.id !== action.newSubCategory.id)
        //             , updateCategory, categorySetChild],
        //         subCategories: [...state.subCategories, newSubCategory]
        //     }
        // }


        //action.category and action.subCategory do not use?
        // case DEL_SUBCATEGORY: {
        //
        //     const selectedCategory = {
        //         ...state.categories
        //             .find(category => category.id === action.subCategory.idParent)
        //     }
        //
        //     const updateCategory = {
        //         id: selectedCategory.id,
        //         name: selectedCategory.name,
        //         rating: selectedCategory.rating,
        //         parent: selectedCategory.parent,
        //         child: false
        //     }
        //
        //     const countSubCatSelectedCategory = [...state.subCategories
        //         .filter(sub => sub.idCategory === action.category.id)].length
        //
        //     const updateParentCategory = {
        //         id: action.category.id,
        //         name: action.category.name,
        //         rating: action.category.rating,
        //         parent: countSubCatSelectedCategory !== 1,
                // child: false
            // }
            //
            // return {
            //     ...state,
            //     categories: [...state.categories
            //         .filter(category => category.id !== selectedCategory.id)
            //         .filter(category => category.id !== action.category.id)
            //         , updateCategory, updateParentCategory],
            //     subCategories: [...state.subCategories
            //         .filter(subCategory => subCategory.id !== action.subCategory.id)]
            // }
        // }

        //action.category + action.newName do not use?
        // case UPDATE_CATEGORYNAME: {
        //
            // const curSubCategories = [...state.subCategories
            //     .filter(subCategory => subCategory.idParent === action.category.id)]
            //
            // let renameCurSubCategories = [];
            //
            // curSubCategories.map(subCategory => {
            //
            //         const newSubCategory = {
            //             id: subCategory.id,
            //             idCategory: subCategory.idCategory,
            //             name: action.newName,
            //             rating: subCategory.rating,
            //             idParent: subCategory.idParent
            //         }
            //         renameCurSubCategories.push(newSubCategory)
            //     }
            // )
            //
            // const updateCategory = {
            //     id: action.category.id,
            //     name: action.newName,
            //     rating: action.category.rating,
            //     parent: action.category.parent,
            //     child: action.category.child
            // }
            //
            // return {
            //     ...state,
            //     categories: [...state.categories.filter(category => category.id !== action.category.id), updateCategory],
            //     subCategories: [...state.subCategories
            //         .filter(subCategory => subCategory.idParent !== action.category.id)]
            //         .concat(renameCurSubCategories)
            // }
        // }

        case CATEGORY_UP: {

            if ([...state.categories].length === 1) return {...state};

            const minRating = [...state.categories.sort((a, b) => a.rating > b.rating)][0].rating;
            if (action.rating === minRating) return {...state};

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
            if ([...state.categories].length === 1) return {...state};
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

            if (curSubCategories.length === 1) return {...state};

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
            const curSubCategories = [...state.subCategories
                .filter(subCategory => subCategory.idCategory === action.subCategory.idCategory)]

            if (curSubCategories.length === 1) return {...state};

            const minRating = curSubCategories.sort((a, b) => a.rating > b.rating)[0].rating;
            if (action.subCategory === minRating) return {...state};


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