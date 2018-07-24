import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {
    getCategories,
    addExpense,
    getExpenses,
    getSubCategories,
    getInitialState
} from 'actions/actionCreator'
import Dashboard from 'views/Dashboard/Dashboard'

class DashboardContainer extends React.Component {
    componentDidMount() {
        this.props.getInitialState(this.props.token)
    }

    render() {
        return (
            <div>
                <Dashboard
                    expenses={this.props.expenses}
                    categories={this.props.categories}
                    addExpense={this.props.addExpense}
                    token={this.props.token}
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
    expenses: state.mainReducer.expenses,
    token: state.mainReducer.token
})

const mapDispatchToProps = {
    getCategories,
    addExpense,
    getExpenses,
    getInitialState
    // getSubCategories// ?
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer)

