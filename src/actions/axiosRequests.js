import Urls from 'constants/Urls'
import axios from 'axios'

const Axios = axios.create({
    baseURL: Urls.baseApiUrl,
    headers: {
        "Authorization": "Bearer " + localStorage.getItem('token')
    }
});

//getCategories
export const GetCategories = () => {
    return Axios.get(Urls.getCategories)
}

// Add Category
export const AddCategory = newCategory => {
    return Axios.post(Urls.addCategory, newCategory)
}

//Del Category
export const DelCategory = id => {
    return Axios.delete(Urls.delCategory + id)
}

//Update Category
export const UpdateCategory = (_id, updateCategory) => {
    return Axios.put(Urls.updateCategory + _id, updateCategory)
}

//GetSubCategories
export const GetSubCategories = () => {
    return Axios.get(Urls.getSubCategories)
}

//AddSubCategory
export const AddSubCategory = newSubCategory => {
    return Axios.post(Urls.addSubCategory, newSubCategory)
}

//Delete SubCategory
export const DelSubCategory = id => {
    return Axios.delete(Urls.delSubCategory + id)
}

export const UpdateSubCategory = (_id, updateSubCategory) => {
    return Axios.put(Urls.updateSubCategory + _id, updateSubCategory)
}

//GetExpenses
export const GetExpenses = () => {
    return Axios.get(Urls.getExpenses)
}

//AddExpense
export const AddExpense = newExpense => {
    return Axios.post(Urls.addExpense, newExpense)
}


//Update Expense
export const UpdateExpense = (_id, updateExpense) => {
    return Axios.put(Urls.updateExpense + _id, updateExpense)
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
