import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

// @material-ui/core components
import Grid from "@material-ui/core/Grid";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Button from "components/CustomButtons/Button.jsx";

import DatePickerReports from "components/DatePickerReports/DatePickerReports";

function getModalStyle() {
    const top = 50
    const left = 50

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const styles = theme => ({
    paper: {
        position: 'absolute',
        width: theme.spacing.unit * 150,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4
    },
});

class ModalDialogDatePickers extends React.Component {

    state = {
        open: false,
        beginDay: this.props.beginDay,
        endDay: this.props.endDay
    }

    handleOK = () => {
        this.props.setPeriod(this.state.beginDay, this.state.endDay)
        // this.handleClose()
    }

    handleBeginDay = val => this.setState({beginDay: val})
    handleEndDay = val => this.setState({endDay: val})

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    render() {
        const {classes} = this.props;
// alert('this.state.beginDay in ModalDialogDatePicker = ' + this.state.beginDay)//ok
        return (
            <div>
                <Button color="primary" onClick={this.handleOpen}>
                    PERIOD
                </Button>
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.state.open}
                    onClose={this.handleClose}
                >
                    <div style={getModalStyle()} className={classes.paper}>
                        <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                            <Button color="secondary" onClick={this.handleClose}>Cancel</Button>
                        </div>

                        <Grid container>
                            <GridItem xs={12} sm={12} md={12}>
                                <Card>
                                    <CardHeader color="primary">
                                        <h4 className={classes.cardTitleWhite}>
                                            Choice period for reports</h4>
                                        <p className={classes.cardCategoryWhite}>
                                            Please, choice period
                                        </p>
                                    </CardHeader>
                                    <CardBody>
<DatePickerReports
    label = {this.props.label}
    beginDay={this.state.beginDay}
    handleBeginDay = {this.handleBeginDay}
    // setPeriod={this.props.setPeriod }//вызвать его когда ОК нажмет юзер
/>
                                        <Button color="primary" onClick={this.handleOK}>
                                            OK
                                        </Button>
                                    </CardBody>
                                </Card>
                            </GridItem>
                        </Grid>
                    </div>
                </Modal>
            </div>
        );
    }
}

ModalDialogDatePickers.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ModalDialogDatePickers);