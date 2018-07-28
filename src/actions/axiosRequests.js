import Urls from 'constants/Urls';
import axios from 'axios';

let Axios = axios.create({
    baseURL: Urls.baseApiUrl,
});

Axios.interceptors.request.use(
    config => {
        config.headers.authorization = 'Bearer ' + localStorage.getItem('token');
        return config;
    },
    error => Promise.reject(error)
);

//getCurrentUserByToken
export const GetCurrentUserByToken = () => {
    return Axios.post(Urls.token);
};

//getCategories
export const GetCategories = () => {
    return Axios.get(Urls.getCategories);
    // return axiosInstance.get(Urls.getCategories)
};

// Add Category
export const AddCategory = newCategory => {
    return Axios.post(Urls.addCategory, newCategory);
};

//Del Category
export const DelCategory = id => {
    return Axios.delete(Urls.delCategory + id);
};

//Update Category
export const UpdateCategory = (_id, updateCategory) => {
    return Axios.put(Urls.updateCategory + _id, updateCategory);
};

//GetExpenses
export const GetExpenses = () => {
    return Axios.get(Urls.getExpenses);
};

//AddExpense
export const AddExpense = newExpense => {
    return Axios.post(Urls.addExpense, newExpense);
};


//Update Expense
export const UpdateExpense = (_id, updateExpense) => {
    return Axios.put(Urls.updateExpense + _id, updateExpense);
};


export const Verify = user => {
    return axios.post(Urls.verify, user);
};

export const Signin = user => {
    return axios.post(Urls.signin, user);
};
export const Signup = user => {
    return axios.post(Urls.signup, user);
};
