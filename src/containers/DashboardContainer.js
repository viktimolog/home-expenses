import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {createSelector} from 'reselect'
import {
    // getItems,
    categoryUP,
    categoryDOWN,
    delCategory,
    addCategory,
    updateCategoryName,
    subCategoryUP,
    subCategoryDOWN,
    delSubCategory,
    addSubCategory
} from 'actions/actionCreator'
import Dashboard from 'views/Dashboard/Dashboard'

class DashboardContainer extends React.Component {

    // componentDidMount() {
    //     this.props.getItems()
    // }

    render() {
        return (
            <div>
                <Dashboard
                    expenses={this.props.expenses}


                />
            </div>)
    }
}

DashboardContainer.propTypes = {
    categories: PropTypes.array.isRequired,

    addSubCategory: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    categories: state.mainReducer.categories,
    expenses: state.mainReducer.expenses
})

const mapDispatchToProps = {
    // getItems,
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer)

