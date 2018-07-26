const baseApiUrl = 'http://localhost:5000/api/'

const Urls = {
    baseApiUrl: baseApiUrl,
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
    verify: baseApiUrl + 'users/verify',
    token: baseApiUrl + 'users/token'
};
export default Urls;

