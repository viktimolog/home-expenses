import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Modal from '@material-ui/core/Modal';

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
        endDay: this.props.endDay,
        tmpBegin: Date.now(),
        tmpEnd: Date.now()
    }

    handleTmpBegin = val => this.setState({tmpBegin: val})

    handleTmpEnd = val => this.setState({tmpEnd: val})

    handleOK = () => {
        if (isNaN(this.state.tmpBegin) || isNaN(this.state.tmpEnd)) {
            alert('Please, fill all the datepickers')
            return
        }

        if (this.state.tmpBegin > this.state.tmpEnd) {
            this.props.setPeriod(this.state.tmpEnd, this.state.tmpBegin)
            this.handleClose()
            return
        }
        this.props.setPeriod(this.state.tmpBegin, this.state.tmpEnd)
        this.handleClose()
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
                                    <Grid container>
                                        <GridItem xs={12} sm={12} md={4}>
                                            <CardBody>
                                                <DatePickerReports
                                                    label={'From: '}
                                                    beginDay={this.state.beginDay}
                                                    handleBeginDay={this.handleBeginDay}
                                                    handleTmpBegin={this.handleTmpBegin}
                                                    tmpBegin={this.state.tmpBegin}
                                                />
                                            </CardBody>
                                        </GridItem>
                                        <GridItem xs={12} sm={12} md={4}>
                                            <CardBody>
                                                <DatePickerReports
                                                    label={'To: '}
                                                    beginDay={this.state.endDay}
                                                    handleBeginDay={this.handleEndDay}
                                                    handleTmpBegin={this.handleTmpEnd}
                                                    tmpBegin={this.state.tmpEnd}
                                                />
                                            </CardBody>
                                        </GridItem>
                                        <GridItem xs={12} sm={12} md={4}>
                                            <CardBody>
                                                <Button
                                                    color="primary"
                                                    onClick={this.handleOK}>
                                                    OK
                                                </Button>
                                            </CardBody>
                                        </GridItem>
                                    </Grid>
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