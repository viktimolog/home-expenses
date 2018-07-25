const baseApiUrl = 'http://localhost:5000/api/'
const baseApiUrlCategories = 'http://localhost:5000/api/categories/'
const baseApiUrlExpenses = 'http://localhost:5000/api/expenses/'
const baseApiUrlSubCategories = 'http://localhost:5000/api/subCategories/'

// http://localhost:5000/api/categories/getCategories

const Urls = {
    //new
    baseApiUrl: 'http://localhost:5000/api/',
    getCategories: 'categories/getCategories',
    addCategory: 'categories/addCategory',
    delCategory: 'categories/delCategory/',
    updateCategory: 'categories/updateCategory/',

    getSubCategories: 'subCategories/getSubCategories',
    addSubCategory: 'subCategories/addSubCategory',
    delSubCategory: 'subCategories/delSubCategory/',
    updateSubCategory: 'subCategories/updateSubCategory/',

    getExpenses: 'expenses/getExpenses',
    addExpense: 'expenses/addExpense',
    updateExpense: 'expenses/updateExpense/',

    signin: baseApiUrl + 'users/login',
    signup: baseApiUrl + 'users/register',
    verify: baseApiUrl + 'users/verify'

};
export default Urls;

