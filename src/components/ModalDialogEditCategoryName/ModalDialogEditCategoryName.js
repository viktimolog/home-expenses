import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import CustomInput from "components/CustomInput/CustomInput.jsx";

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
        width: theme.spacing.unit * 50,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4
    },
});

class ModalDialogEditCategoryName extends React.Component {
    // constructor(props) {
    //     super(props)
    //
    //     this.state = {
    //         open: false,
    //         newName: props.category.name,
    //     }
    // }

    //TODO ?

    state = {
        open: false,
        newName: this.props.category.name,
    }

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    handleUpdateCategoryname = () => {
        this.props.updateCategoryName(this.props.category, this.state.newName.trim());
        this.handleClose();
    };

    stringHandler = name => event => {
        this.setState({
            [name]: event.target.value
        })
    }

    render() {
        const {classes} = this.props;

        return (
            <div>
                <Button onClick={this.handleOpen}>{this.state.newName}</Button>
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.state.open}
                    onClose={this.handleClose}
                >
                    <div style={getModalStyle()} className={classes.paper}>
                        <Typography variant="title" id="modal-title">
                            Please, edit the category
                        </Typography>
                        <CustomInput
                            id="editCategoryName"
                            formControlProps={{fullWidth: true}}
                            inputProps={
                                {
                                    value: this.state.newName,
                                    onChange: this.stringHandler('newName'),
                                    autoFocus: true
                                }
                            }
                        />
                        <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '30px'}}>
                            <Button onClick={this.handleUpdateCategoryname}>OK</Button>
                            <Button onClick={this.handleClose}>Cancel</Button>
                        </div>
                    </div>
                </Modal>
            </div>
        );
    }
}

ModalDialogEditCategoryName.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ModalDialogEditCategoryName);