import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {createSelector} from 'reselect'
import {
    getCategories,
    addExpense,
    getExpenses,
    getSubCategories,
    getInitialState,
    // getCurrentUserByToken
} from 'actions/actionCreator'
import Dashboard from 'views/Dashboard/Dashboard'

class DashboardContainer extends React.Component {
    componentDidMount() {
        this.props.getInitialState()
    }

    render() {
        // console.log('console.log this.props.pastDescriptions = ',this.props.pastDescriptions)//ok
        return (
            <div>
                <Dashboard
                    expenses={this.props.expenses}
                    categories={this.props.categories}
                    addExpense={this.props.addExpense}
                    idUser={this.props.idUser}
                    pastDescriptions={this.props.pastDescriptions}
                />
            </div>)
    }
}

const getExpensesFromState = state => state.mainReducer.expenses

const getPastDescriptions = createSelector(
    getExpensesFromState,
    (expenses) => {

        let pastDescriptions = [];

        expenses.map(exp => {
            pastDescriptions.push({label: exp.expense})
        })

        return pastDescriptions
    }
)

DashboardContainer.propTypes = {
    categories: PropTypes.array.isRequired,
    addExpense: PropTypes.func.isRequired,
    getExpenses: PropTypes.func.isRequired,
    getInitialState: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    categories: state.mainReducer.categories,
    expenses: state.mainReducer.expenses,
    idUser: state.mainReducer.idUser,
    pastDescriptions: getPastDescriptions(state)
})

const mapDispatchToProps = {
    getCategories,
    addExpense,
    getExpenses,
    getInitialState,
    // getCurrentUserByToken
    // getSubCategories// ?
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer)

