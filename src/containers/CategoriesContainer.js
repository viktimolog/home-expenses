import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {createSelector} from 'reselect'
import {
    getCategories,
    addCategory,
    delCategory,
    getExpenses,
    updateExpense,
    updateCategory,
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
                    updateCategory={this.props.updateCategory}
                    clearCategories={this.props.clearCategories}
                    expenses={this.props.expenses}
                    updateExpense={this.props.updateExpense}
                />
            </div>)
    }
}

const getCategoriesFromState = state => state.mainReducer.categories

const getClearCategories = createSelector(
    getCategoriesFromState,
    (categories) => {

        return categories
            .filter(category => category.isChild === false)
            .filter(category => category.isParent === false)

    }
)

const mapStateToProps = state => ({
    categories: state.mainReducer.categories,
    expenses: state.mainReducer.expenses,
    clearCategories: getClearCategories(state)
})

CategoriesContainer.propTypes = {
    categories: PropTypes.array.isRequired,
    clearCategories: PropTypes.array.isRequired,
    expenses: PropTypes.array.isRequired,
    delCategory: PropTypes.func.isRequired,
    addCategory: PropTypes.func.isRequired,
    getCategories: PropTypes.func.isRequired,
    updateExpense: PropTypes.func.isRequired,
    updateCategory: PropTypes.func.isRequired
}

const mapDispatchToProps = {
    delCategory,
    addCategory,
    getCategories,
    getExpenses,
    updateExpense,
    updateCategory,
    getInitialState
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesContainer)

