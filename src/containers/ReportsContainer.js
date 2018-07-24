import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {
    getCategories,
    getSubCategories,
    getExpenses,
    getInitialState
} from 'actions/actionCreator'
import Reports from 'components/Reports/Reports'

class ReportsContainer extends React.Component {

    componentDidMount() {
        this.props.getInitialState(this.props.token)
    }

    render() {
        return (
            <div>
                <Reports
                    categories={this.props.categories}
                    subCategories={this.props.subCategories}
                    expenses={this.props.expenses}
                    token={this.props.token}
                    //func
                />
            </div>)
    }
}

ReportsContainer.propTypes = {
    categories: PropTypes.array.isRequired,
    subCategories: PropTypes.array.isRequired,
    expenses: PropTypes.array.isRequired,
    getInitialState: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    categories: state.mainReducer.categories,
    subCategories: state.mainReducer.subCategories,
    expenses: state.mainReducer.expenses,
    token: state.mainReducer.token
})

const mapDispatchToProps = {
    getCategories,
    getSubCategories,
    getExpenses,
    getInitialState
}

export default connect(mapStateToProps, mapDispatchToProps)(ReportsContainer)

