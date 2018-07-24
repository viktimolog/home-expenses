import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {
    signup
} from 'actions/actionCreator'

import Signup from 'views/Signup/Signup'

class SignUpContainer extends React.Component {
    render() {
        return (
            <div>
                <Signup
                    signup={this.props.signup}
                />
            </div>)
    }
}

SignUpContainer.propTypes = {
    signup: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    // email: state.mainReducer.email,
    // idUser: state.mainReducer.idUser,
    // token: state.mainReducer.idUser,
    // avatar: state.mainReducer.idUser
})

const mapDispatchToProps = {
    signup
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer)