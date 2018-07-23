import Urls from 'constants/Urls'
import axios from 'axios'

//getCategories
export const GetCategories = () => {
    return axios.get(Urls.getCategories)
}

// Add Category
export const AddCategory = newCategory => {
    return axios.post(Urls.addCategory, newCategory)
}

//Update Category
export const UpdateCategory = (_id, updateCategory) => {
    return axios.put(Urls.updateCategory + _id, updateCategory)
}

// Delete Category
export const DelCategory = id => {
    return axios.delete(Urls.delCategory + id)
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


