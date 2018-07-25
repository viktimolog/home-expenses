import Urls from 'constants/Urls'
import axios from 'axios'

//Update Expense
export const UpdateExpense = (_id, updateExpense, token) => {
    // return axios.put(Urls.updateExpense + _id, updateExpense)
    return axios.put(Urls.updateExpense + _id, updateExpense, {
            headers: {
                "Authorization": "Bearer "+ token
            }
        }
    )
}

//GetExpenses
export const GetExpenses = token => {
    return axios.get(Urls.getExpenses, {
            headers: {
                "Authorization": "Bearer "+ token
            }
        }
    )
}

// AddExpense
export const AddExpense = (newExpense, token) => {
    // return axios.post(Urls.addExpense, newExpense)
    return axios.post(Urls.addExpense, newExpense, {
            headers: {
                "Authorization": "Bearer "+ token
            }
        }
    )
}

// AddSubCategory
export const AddSubCategory = (newSubCategory, token) => {
    // return axios.post(Urls.addSubCategory, newSubCategory)
    return axios.post(Urls.addSubCategory, newSubCategory, {
            headers: {
                "Authorization": "Bearer "+ token
            }
        }
    )
}

//GetSubCategories
export const GetSubCategories = token => {
    // return axios.get(Urls.getSubCategories)
    return axios.get(Urls.getSubCategories, {
            headers: {
                "Authorization": "Bearer "+ token
            }
        }
    )
}

// Delete SubCategory
export const DelSubCategory = (id, token) => {
    // return axios.delete(Urls.delSubCategory + id)
    return axios.delete(Urls.delSubCategory + id, {
            headers: {
                "Authorization": "Bearer "+ token
            }
        }
    )
}

export const UpdateSubCategory = (_id, updateSubCategory, token) => {
    // return axios.put(Urls.updateSubCategory + _id, updateSubCategory
    return axios.put(Urls.updateSubCategory + _id, updateSubCategory, {
            headers: {
                "Authorization": "Bearer "+ token
            }
        }
    )
}

//getCategories
export const GetCategories = token => {
    return axios.get(Urls.getCategories, {
            headers: {
                "Authorization": "Bearer "+ token
            }
        }
    )
}

// Add Category
export const AddCategory = (newCategory, token) => {
    return axios.post(Urls.addCategory, newCategory, {
            headers: {
                "Authorization": "Bearer "+ token
            }
        }
    )
}

export const DelCategory = (id, token) => {
    return axios.delete(Urls.delCategory + id, {
            headers: {
                "Authorization": "Bearer "+ token
            }
        }
    )
}

//Update Category
export const UpdateCategory = (_id, updateCategory, token) => {
    return axios.put(Urls.updateCategory + _id, updateCategory, {
            headers: {
                "Authorization": "Bearer "+ token
            }
        }
    )
}

export const Verify = user => {
    return axios.post(Urls.verify, user)
}

export const Signin = user => {
    return axios.post(Urls.signin, user)
}
export const Signup = user => {
    return axios.post(Urls.signup, user)
}
