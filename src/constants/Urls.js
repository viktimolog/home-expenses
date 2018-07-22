// const baseApiUrl = 'http://smktesting.herokuapp.com/api/'
const baseApiUrl = 'http://localhost:5000/api/'
const baseApiUrlCategories = 'http://localhost:5000/api/categories'
const baseApiUrlExpenses = 'http://localhost:5000/api/expenses'
const baseApiUrlSubCategories = 'http://localhost:5000/api/subCategories'

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

    addSubCategory: baseApiUrlSubCategories + 'addSubCategory',
    getSubCategory: baseApiUrlSubCategories + 'getSubCategory',
    delSubCategory: baseApiUrlSubCategories + 'delSubCategory/',
    updateSubCategory: baseApiUrlCategories + 'updateSubCategory/',

};
export default Urls;

