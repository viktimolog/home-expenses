const baseApiUrl = 'http://localhost:7777/api/'

const Urls = {
    baseApiUrl: baseApiUrl,
    getCategories: 'categories/getCategories',
    addCategory: 'categories/addCategory',
    delCategory: 'categories/delCategory/',
    updateCategory: 'categories/updateCategory/',
    upCategory: 'categories/upCategory/',

    getExpenses: 'expenses/getExpenses',
    addExpense: 'expenses/addExpense',
    updateExpense: 'expenses/updateExpense/',

    signin: baseApiUrl + 'users/login',
    signup: baseApiUrl + 'users/register',
    verify: baseApiUrl + 'users/verify',
    token: baseApiUrl + 'users/token'
};
export default Urls;

