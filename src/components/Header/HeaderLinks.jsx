import React from "react";
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import classNames from "classnames";
import {Manager, Target, Popper} from "react-popper";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Hidden from "@material-ui/core/Hidden";
// @material-ui/icons
// core components
import Person from "@material-ui/icons/Person";
import FormLabel from "@material-ui/core/FormLabel";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Button from "components/CustomButtons/Button.jsx";
import {Link} from 'react-router-dom'

import headerLinksStyle from "assets/jss/material-dashboard-react/components/headerLinksStyle";
import {
    signOut
} from 'actions/actionCreator'


class HeaderLinks extends React.Component {
    state = {
        open: false
    };

    handleClose = () => {
        this.setState({open: false});
    };

    handleClick = () => {
        this.setState({open: !this.state.open});
    };

    handleSignOut = () => {
        this.props.signOut();
        this.handleClose();
    }

    render() {
        const {classes, isUser, email} = this.props;
        const {open} = this.state;
        return (
            <div>
                {isUser && (
                    <FormLabel className={classes.emailLabel}>
                        {email}
                    </FormLabel>
                )}
                <Manager className={classes.manager}>
                    <Target>
                        <Button
                            color={window.innerWidth > 959 ? "transparent" : "white"}
                            justIcon={window.innerWidth > 959}
                            simple={!(window.innerWidth > 959)}
                            aria-label="Person"
                            className={classes.buttonLink}
                            onClick={this.handleClick}
                        >
                            {isUser && <AccountCircle className={classes.icons}/>}
                            {!isUser && <Person className={classes.icons}/>}
                            <Hidden mdUp>
                                <p className={classes.linkText}>Profile</p>
                            </Hidden>

                        </Button>

                    </Target>
                    <Popper
                        placement="bottom-start"
                        eventsEnabled={open}
                        className={
                            classNames({[classes.popperClose]: !open}) +
                            " " +
                            classes.pooperResponsive
                        }
                    >

                        <ClickAwayListener onClickAway={this.handleClose}>
                            <Grow
                                in={open}
                                id="menu-list"
                                style={{transformOrigin: "0 0 0"}}
                            >
                                <Paper className={classes.dropdown}>
                                    <MenuList role="menu">
                                        {
                                            !isUser &&
                                            (<React.Fragment>
                                                <Link to='/signin'>
                                                    <MenuItem
                                                        className={classes.dropdownItem}
                                                        onClick={this.handleClose}
                                                    >
                                                        Sign In
                                                    </MenuItem>
                                                </Link>
                                                < Link to='/signup'>
                                                    <MenuItem
                                                        className={classes.dropdownItem}
                                                        onClick={this.handleClose}
                                                    >
                                                        Sign Up
                                                    </MenuItem>
                                                </Link>
                                            </React.Fragment>)
                                        }
                                        {
                                            isUser &&
                                            (<Link to='/signin'>
                                                <MenuItem
                                                    className={classes.dropdownItem}
                                                    onClick={this.handleSignOut}
                                                >
                                                    Sign Out
                                                </MenuItem>
                                            </Link>)
                                        }
                                    </MenuList>
                                </Paper>
                            </Grow>
                        </ClickAwayListener>
                    </Popper>
                </Manager>
            </div>
        );
    }
}

// export default withStyles(headerLinksStyle)(HeaderLinks);

HeaderLinks.propTypes = {
    isUser: PropTypes.string.isRequired,
    signOut: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
    isUser: state.mainReducer.isUser,
    email: state.mainReducer.email
})

const mapDispatchToProps = {
    signOut
}

export default connect(mapStateToProps,
    mapDispatchToProps)(withStyles(headerLinksStyle)(HeaderLinks))