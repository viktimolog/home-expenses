import React from "react";
import classNames from "classnames";
import {Manager, Target, Popper} from "react-popper";
// import { Manager, Target, Popper } from '@snowcoders/react-popper'
import Grid from "@material-ui/core/Grid";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Hidden from "@material-ui/core/Hidden";
// @material-ui/icons
import Person from "@material-ui/icons/Person";
import Notifications from "@material-ui/icons/Notifications";
import Dashboard from "@material-ui/icons/Dashboard";
import Search from "@material-ui/icons/Search";
// core components
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Typography from '@material-ui/core/Typography';
import {Link, withRouter} from 'react-router-dom'

import headerLinksStyle from "assets/jss/material-dashboard-react/components/headerLinksStyle";


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


    render() {
        const {classes} = this.props;
        const {open} = this.state;
        return (
            <div>
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
                            <Person className={classes.icons}/>

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
                                        <Link to='/signin'>
                                            <MenuItem
                                                className={classes.dropdownItem}
                                                onClick={this.handleClose}
                                            >
                                                Sign In
                                            </MenuItem>
                                        </Link>
                                        <Link to='/signup'>
                                            <MenuItem
                                                className={classes.dropdownItem}
                                                onClick={this.handleClose}
                                            >
                                                Sign Up
                                            </MenuItem>
                                        </Link>
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

export default withStyles(headerLinksStyle)(HeaderLinks);