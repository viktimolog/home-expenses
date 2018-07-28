import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {
    signup
} from 'actions/actionCreator';

import Signup from 'views/Signup/Signup';

class SignUpContainer extends React.Component {
    render() {
        return (
            <div>
                <Signup
                    signup={this.props.signup}
                />
            </div>);
    }
}

SignUpContainer.propTypes = {
    signup: PropTypes.func.isRequired
};

const mapDispatchToProps = {
    signup
};

export default connect(null, mapDispatchToProps)(SignUpContainer);
