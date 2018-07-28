import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {
    getInitialState
} from 'actions/actionCreator';
import Reports from 'components/Reports/Reports';

class ReportsContainer extends React.Component {
    componentDidMount() {
        this.props.getInitialState();
    }

    render() {
        return (
            <div>
                <Reports
                    categories={this.props.categories}
                    expenses={this.props.expenses}
                />
            </div>);
    }
}

ReportsContainer.propTypes = {
    categories: PropTypes.array.isRequired,
    expenses: PropTypes.array.isRequired,
    getInitialState: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    categories: state.mainReducer.categories,
    expenses: state.mainReducer.expenses
});

const mapDispatchToProps = {
    getInitialState
};

export default connect(mapStateToProps, mapDispatchToProps)(ReportsContainer);

