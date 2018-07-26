import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {createSelector} from 'reselect'
import {
    categoryUP,
    categoryDOWN,
    subCategoryUP,
    subCategoryDOWN,
    delSubCategory,
    addSubCategory,
    getCategories,
    addCategory,
    delCategory,
    getSubCategories,
    getExpenses,
    updateExpense,
    updateCategory,
    updateSubCategory,
    getInitialState
} from 'actions/actionCreator'
import Config from 'views/Config/Config'

class CategoriesContainer extends React.Component {

    componentDidMount() {
        this.props.getInitialState()
    }

    render() {
        return (
            <div>
                <Config
                    delCategory={this.props.delCategory}
                    addCategory={this.props.addCategory}
                    categories={this.props.categories}
                    categoryUP={this.props.categoryUP}
                    categoryDOWN={this.props.categoryDOWN}
                    updateCategory={this.props.updateCategory}
                    subCategories={this.props.subCategories}
                    subCategoryUP={this.props.subCategoryUP}
                    subCategoryDOWN={this.props.subCategoryDOWN}
                    delSubCategory={this.props.delSubCategory}
                    addSubCategory={this.props.addSubCategory}
                    clearCategories={this.props.clearCategories}
                    expenses={this.props.expenses}
                    updateExpense={this.props.updateExpense}
                    updateSubCategory={this.props.updateSubCategory}
                    idUser={this.props.idUser}
                />
            </div>)
    }
}

const getCategoriesFromState = state => state.mainReducer.categories

const getClearCategories = createSelector(
    getCategoriesFromState,
    (categories) => {

        return categories
            .filter(category => category.parent === false)
            .filter(category => category.child === false)

    }
)

const mapStateToProps = state => ({
    categories: state.mainReducer.categories,
    subCategories: state.mainReducer.subCategories,
    expenses: state.mainReducer.expenses,
    idUser: state.mainReducer.idUser,
    clearCategories: getClearCategories(state)
})

CategoriesContainer.propTypes = {
    categories: PropTypes.array.isRequired,
    idUser: PropTypes.string.isRequired,
    subCategories: PropTypes.array.isRequired,
    categoryUP: PropTypes.func.isRequired,
    categoryDOWN: PropTypes.func.isRequired,
    delCategory: PropTypes.func.isRequired,
    addCategory: PropTypes.func.isRequired,
    delSubCategory: PropTypes.func.isRequired,
    addSubCategory: PropTypes.func.isRequired,
    getCategories: PropTypes.func.isRequired,
    getSubCategories: PropTypes.func.isRequired,
    updateExpense: PropTypes.func.isRequired,
    updateCategory: PropTypes.func.isRequired,
    updateSubCategory: PropTypes.func.isRequired
}

const mapDispatchToProps = {
    delCategory,
    categoryUP,
    categoryDOWN,
    addCategory,
    subCategoryUP,
    subCategoryDOWN,
    delSubCategory,
    addSubCategory,
    getCategories,
    getSubCategories,
    getExpenses,
    updateExpense,
    updateCategory,
    updateSubCategory,
    getInitialState
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesContainer)

