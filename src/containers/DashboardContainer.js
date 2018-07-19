import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {createSelector} from 'reselect'
import {
    // getItems,
    addExpenses
} from 'actions/actionCreator'
import Dashboard from 'views/Dashboard/Dashboard'

class DashboardContainer extends React.Component {

    // componentDidMount() {
    //     this.props.getCategories()
    //     this.props.getExpenses()
    // }

    render() {
        return (
            <div>
                <Dashboard
                    expenses={this.props.expenses}
                    categories={this.props.categories}
                    addExpenses = {this.props.addExpenses}
                />
            </div>)
    }
}

DashboardContainer.propTypes = {
    categories: PropTypes.array.isRequired,
    addSubCategory: PropTypes.func.isRequired,
    addExpenses: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    categories: state.mainReducer.categories,
    expenses: state.mainReducer.expenses
})

const mapDispatchToProps = {
    // getCategories,
    addExpenses
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer)

