import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {createSelector} from 'reselect'
import {
    getCategories,
    addExpense,
    getExpenses,
    getSubCategories,
    getInitialState
} from 'actions/actionCreator'
import Dashboard from 'views/Dashboard/Dashboard'
import Urls from 'constants/Urls'

class DashboardContainer extends React.Component {
    componentDidMount() {
        this.props.getInitialState()
    }

    render() {
        return (
            <div>
                <Dashboard
                    expenses={this.props.expenses}
                    categories={this.props.categories}
                    addExpense={this.props.addExpense}
                />
            </div>)
    }
}

DashboardContainer.propTypes = {
    categories: PropTypes.array.isRequired,
    addExpense: PropTypes.func.isRequired,
    getExpenses: PropTypes.func.isRequired,
    getInitialState: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    categories: state.mainReducer.categories,
    expenses: state.mainReducer.expenses
})

const mapDispatchToProps = {
    getCategories,
    addExpense,
    getExpenses,
    getInitialState
    // getSubCategories// ?
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer)

