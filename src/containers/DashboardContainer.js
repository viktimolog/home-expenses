import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
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

        // alert('didmount DashboardContainer')

        // if(localStorage.getItem('token'))
        // this.props.getCurrentUserByToken()

        this.props.getInitialState()
    }

    render() {
        return (
            <div>
                <Dashboard
                    expenses={this.props.expenses}
                    categories={this.props.categories}
                    addExpense={this.props.addExpense}
                    idUser={this.props.idUser}
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
    idUser: state.mainReducer.idUser
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

