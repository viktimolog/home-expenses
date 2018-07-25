import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {
    signin
} from 'actions/actionCreator'

import Signin from 'views/Signin/Signin'

class SignInContainer extends React.Component {
    render() {
        return (
            <div>
                <Signin
                    signin={this.props.signin}
                />
            </div>)
    }
}

SignInContainer.propTypes = {
    signin: PropTypes.func.isRequired
}

const mapDispatchToProps = {
    signin
}

export default connect(null, mapDispatchToProps)(SignInContainer)