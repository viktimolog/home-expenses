import Urls from 'constants/Urls'
import axios from 'axios'

// Add Category
export const AddCategory = (newCategory, token) => {
    // return axios.post(Urls.addCategory, newCategory)

    return axios.post(Urls.addCategory, newCategory, {
            headers: {
                "Authorization": "Bearer "+ token
            }
        }
    )
}

//getCategories
export const GetCategories = token => {
    // return axios.get(Urls.getCategories)
    return axios.get(Urls.getCategories, {
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
    // return axios.put(Urls.updateCategory + _id, updateCategory)
    return axios.put(Urls.updateCategory + _id, {
            headers: {
                "Authorization": "Bearer "+ token
            }
        }
    )
}

export const UpdateSubCategory = (_id, updateSubCategory) => {
    return axios.put(Urls.updateSubCategory + _id, updateSubCategory)
}

export const Signin = user => {
    return axios.post(Urls.signin, user)
}

//Update Expense
export const UpdateExpense = (_id, updateExpense) => {
    return axios.put(Urls.updateExpense + _id, updateExpense)
}

//GetSubCategories
export const GetSubCategories = () => {
    return axios.get(Urls.getSubCategories)
}

// AddSubCategory
export const AddSubCategory = newSubCategory => {
    return axios.post(Urls.addSubCategory, newSubCategory)
}

// Delete SubCategory
export const DelSubCategory = id => {
    return axios.delete(Urls.delSubCategory + id)
}

//GetExpenses
export const GetExpenses = () => {
    return axios.get(Urls.getExpenses)
}

// AddExpense
export const AddExpense = newExpense => {
    return axios.post(Urls.addExpense, newExpense)
}


