import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {
    signin
} from 'actions/actionCreator'

import Signin from 'views/Signin/Signin'

class SignInContainer extends React.Component {
    // componentDidMount() {
    //     this.props.getInitialState()
    // }

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
    // categories: PropTypes.array.isRequired,
    signin: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    email: state.mainReducer.email,
    idUser: state.mainReducer.idUser,
    token: state.mainReducer.idUser,
    avatar: state.mainReducer.idUser
})

const mapDispatchToProps = {
    signin
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInContainer)