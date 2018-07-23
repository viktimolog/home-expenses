import React from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import PropTypes from 'prop-types'
import {createSelector} from 'reselect'
import {
    getCategories,
    addExpense,
    getExpenses,
    getSubCategories
} from 'actions/actionCreator'
import Dashboard from 'views/Dashboard/Dashboard'
import Urls from 'constants/Urls'

class DashboardContainer extends React.Component {
    // constructor() {
    //     super()
    //     this.getData = this.getData.bind(this)
    // }

    async getInitialState(url, func){
        try {
            const response = await axios
                .get(url)
                .then(res => res.data)
            func(response)
        } catch (error) {
            alert('error = ' + error)
        }
    }

    componentDidMount() {
        // this.getData(Urls.getCategories)
        // this.getSubCat(Urls.getSubCategories)

        this.getInitialState(Urls.getCategories, this.props.getCategories)
        // this.getInitialState(Urls.getSubCategories, this.props.getSubCategories)//?
        this.getInitialState(Urls.getExpenses, this.props.getExpenses)
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
    getExpenses: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    categories: state.mainReducer.categories,
    expenses: state.mainReducer.expenses
})

const mapDispatchToProps = {
    getCategories,
    addExpense,
    getExpenses,
    // getSubCategories// ?
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer)

