import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {createSelector} from 'reselect'
import {
    // getItems,
    getCategories,
    getSubCategories,
    getExpenses
} from 'actions/actionCreator'
import Reports from 'components/Reports/Reports'

class ReportsContainer extends React.Component {

    componentDidMount() {
        // this.props.getCategories()
        // this.props.getSubCategories()
        // this.props.getExpenses()
    }

    render() {
        return (
            <div>
                <Reports
                    categories={this.props.categories}
                    subCategories={this.props.subCategories}
                    expenses={this.props.expenses}
                    //func
                />
            </div>)
    }
}

ReportsContainer.propTypes = {
    categories: PropTypes.array.isRequired,
    subCategories: PropTypes.array.isRequired,
    expenses: PropTypes.array.isRequired,

    // addExpenses: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    categories: state.mainReducer.categories,
    subCategories: state.mainReducer.subCategories,
    expenses: state.mainReducer.expenses
})

const mapDispatchToProps = {
    getCategories,
    getSubCategories,
    getExpenses
}

export default connect(mapStateToProps, mapDispatchToProps)(ReportsContainer)

