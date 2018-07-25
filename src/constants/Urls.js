// const baseApiUrl = 'http://smktesting.herokuapp.com/api/'
const baseApiUrl = 'http://localhost:5000/api/'
const baseApiUrlCategories = 'http://localhost:5000/api/categories/'
const baseApiUrlExpenses = 'http://localhost:5000/api/expenses/'
const baseApiUrlSubCategories = 'http://localhost:5000/api/subCategories/'

// http://localhost:5000/api/categories/getCategories

const Urls = {
    reg: baseApiUrl + 'register/',
    log: baseApiUrl + 'login/',
    // categories: baseApiUrl + 'categories/',
    // subCategories: baseApiUrl + 'subCategories/',
    // expenses: baseApiUrl + 'expenses/',

    addCategory: baseApiUrlCategories + 'addCategory',
    updateCategory: baseApiUrlCategories + 'updateCategory/',
    getCategories: baseApiUrlCategories + 'getCategories',
    delCategory: baseApiUrlCategories + 'delCategory/',

    getExpenses: baseApiUrlExpenses + 'getExpenses',
    addExpense: baseApiUrlExpenses + 'addExpense',
    updateExpense: baseApiUrlExpenses + 'updateExpense/',

    addSubCategory: baseApiUrlSubCategories + 'addSubCategory',
    getSubCategories: baseApiUrlSubCategories + 'getSubCategories',
    delSubCategory: baseApiUrlSubCategories + 'delSubCategory/',
    updateSubCategory: baseApiUrlSubCategories + 'updateSubCategory/',

    signin: baseApiUrl + 'users/login',
    signup: baseApiUrl + 'users/register',
    verify: baseApiUrl + 'users/verify'

};
export default Urls;

